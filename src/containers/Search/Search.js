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
    this.title = Util.getUrlParam(this.props.location.search, 'q');
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

  render() {
    return (
      <div className={style.cSearch}>
        <Header />
        <main>
          <SearchBar title={this.title}
              inputValueChange={(e) => this.handlerSearchBarValueChange(e)}
              submitClick={() => this.handlerSearchBarSubmitClick()}/>
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