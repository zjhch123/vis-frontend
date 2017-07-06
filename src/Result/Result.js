import React from 'react';
import style from './Result.scss';
import ResultHeader from '../Commons/ResultHeader.js';
import Footer from '../Commons/Footer.js';
import SearchResult from './SearchResult.js';
import Util from '../Util/Util.js';
import createHistory from 'history/createBrowserHistory';

const history = createHistory()

export default class Result extends React.Component {

  constructor() {
    super()
    this.state = {
      condition: {
        q: '',
        page: 1,
        pageSize: 10,
      }
    }
  }

  handlerSearch(val, page, pageSize) {
    val = val || ''
    page = page || 1
    pageSize = pageSize || 10
    this.setState({
      condition: {
        q: val,
        page: page || 1,
        pageSize: pageSize || 10
      }
    });
    const location = {
      filename: '/result',
      search: `q=${val}&page=${page}&pageSize=${pageSize}`
    };
    history.push(location)
  }

  componentWillMount() {
    let search = this.props.location.search
    let q = Util.getUrlParam(search, 'q')
    let page = Util.getUrlParam(search, 'page')
    let pageSize = Util.getUrlParam(search, 'pageSize')
    this.setState({
      condition: {
        q: q || '',
        page: page || 1,
        pageSize: pageSize || 10
      }
    });
  }

  render() {
    return (
      <div className={style["g-result"]}>
        <ResultHeader className={style["m-result-header"]} onSearch={(val) => this.handlerSearch(val)}/>
        <main className={style["m-main"]}>
          <SearchResult condition={this.state.condition}/>
        </main>
        <Footer className={style["m-result-footer"]}/>
      </div>
    )
  }
}

