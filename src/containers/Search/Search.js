import React from 'react';
import style from './Search.scss';
import Header from '../../components/ResultHeader/Header';
import Footer from '../../components/ResultFooter/Footer';
import SearchBar from '../../components/ResultHeader/SearchBar';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Util from '../../util';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.title = Util.getUrlParam(this.props.location.search, 'q') || '';
    this.searchBarInputValue = this.title;
  }

  componentWillUpdate(nextProps) {
    this.title = Util.getUrlParam(nextProps.location.search, 'q') || '';
    this.searchBarInputValue = this.title;
  }

  handlerSearchBarValueChange(e) {
    this.searchBarInputValue = e.target.value;
  }

  handlerSearchBarSubmitClick() {
    this.props.dispatch(push({
      location: '/search',
      search: `q=${this.searchBarInputValue}&_=${Date.now()}`
    }));
  }

  renderNotInpuView() {
    return (
      <div className={style.cNotInput}>
        <h1>请输入搜索条件</h1>
      </div>
    )
  }  

  renderResultView() {

  }

  render() {
    let view;
    if (this.title === '') {
      view = this.renderNotInpuView();
    } else {
      view = this.renderResultView();
    }
    return (
      <div className={style.cSearch}>
        <Header />
        <main>
          <SearchBar title={this.title}
              inputValueChange={(e) => this.handlerSearchBarValueChange(e)}
              submitClick={() => this.handlerSearchBarSubmitClick()}
              detail={this.title !== ''}/>
          {view}
        </main>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  location: state.router.location
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);