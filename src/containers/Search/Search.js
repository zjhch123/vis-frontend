import React from 'react';
import style from './Search.scss';
import Header from '../../components/ResultHeader/Header';
import Footer from '../../components/ResultFooter/Footer';
import SearchBar from '../../components/ResultHeader/SearchBar';
import Result from './Result/';
import Host from './Host/';
import Map from './Map/';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Util from '../../util';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.mapQueryCondition(props);
  }

  componentWillUpdate(nextProps) {
    this.mapQueryCondition(nextProps);
  }

  mapQueryCondition(props) {
    this.title = Util.getUrlParam(props.location.search, 'q') || '';
    this.page = Util.getUrlParam(props.location.search, 'page') || 1;
    this.pageSize = Util.getUrlParam(props.location.search, 'pageSize') || 10;
    this.searchBarInputValue = this.title;
  }

  handlerSearchBarValueChange(e) {
    this.searchBarInputValue = e.target.value;
  }

  handlerSearchBarSubmitClick() {
    if (this.title === this.searchBarInputValue) {
      return;
    }
    this.props.refreshLocation(this.searchBarInputValue, 1, this.pageSize);
  }

  renderLayout() {
    return (
      <div>
        <Header />
        <SearchBar 
            location={this.props.location}
            title={this.title}
            inputValueChange={(e) => this.handlerSearchBarValueChange(e)}
            submitClick={() => this.handlerSearchBarSubmitClick()}
            detail={this.title !== ''}/>
      </div>
    )
  }

  render() {
    return (
      <div className={style.cSearch}>
        <Route component={this.renderLayout.bind(this)} />
        <Switch>
          <Route exact path='/search' render={() => <Result refreshLocation={this.props.refreshLocation.bind(this)}/>}/>
          <Route path='/search/map' render={() => <Map refreshLocation={this.props.refreshLocation.bind(this)}/>}/>
          <Route path='/search/host' render={() => <Host refreshLocation={this.props.refreshLocation.bind(this)}/>}/>
        </Switch>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  location: state.router.location
});

const mapDispatchToProps = (dispatch) => ({
  refreshLocation: function(condition, page, pageSize) {
    dispatch(push({
      location: '/search',
      pathname: '/search',
      search: `?q=${condition}&_=${Date.now()}&page=${page}&pageSize=${pageSize}`
    }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);




