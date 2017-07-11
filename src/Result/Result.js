import React from 'react';
import style from './Result.scss';
import ResultHeader from '../Commons/ResultHeader.js';
import Footer from '../Commons/Footer.js';
import SearchResult from './SearchResult.js';
import Util from '../Util/Util.js';
import createHistory from 'history/createBrowserHistory';
import SearchBar from './SearchBar.js';
import Split from '../Commons/Split.js';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Map from '../Map/Map.js';

const history = createHistory()

NProgress.configure({ trickleSpeed: 100 });

export default class Result extends React.Component {

  constructor() {
    super()
    this.unlisten = null
    this.loading = null
    this.state = {
      condition: {
        q: '',
        page: 1,
        pageSize: 10,
      }
    }
  }

  refreshURL(condition) {
    if(this.loading) return
    condition = condition || this.state.condition
    let val = condition.q
    let page = condition.page
    let pageSize = condition.pageSize
    const location = {
      filename: '/result',
      search: `q=${val}&page=${page}&pageSize=${pageSize}`
    };
    history.push(location)
  }

  handlerSearch(val, page, pageSize) {
    console.log(this.loading)
    val = val || ''
    page = page || 1
    pageSize = pageSize || 10
    let newCondition = {q: val, page: page, pageSize: pageSize}
    if(Util.objIsEquals(newCondition, this.state.condition)) {return}
    this.refreshURL(newCondition)
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

  prevPage() {
    let condition = this.state.condition
    let nowPage = condition.page
    let newCondition = {
      q: condition.q,
      page: parseInt(nowPage) - 1,
      pageSize: condition.pageSize
    }
    this.refreshURL(newCondition)
  }

  nextPage() {
    let condition = this.state.condition
    let nowPage = condition.page
    let newCondition = {
      q: condition.q,
      page: parseInt(nowPage) + 1,
      pageSize: condition.pageSize
    }
    this.refreshURL(newCondition)
  }

  componentDidMount() {
    this.unlisten = history.listen((location, action) => {
      let search = location.search
      let q = Util.getUrlParam(search, 'q')
      let page = Util.getUrlParam(search, 'page')
      let pageSize = Util.getUrlParam(search, 'pageSize')
      let newCondition = {
        q: q,
        page: page,
        pageSize: pageSize
      }
      this.setState({
        condition: newCondition
      })
    })
  }

  componentWillUnmount() {
    this.unlisten()
  }

  isLoading() {
    NProgress.start()
    this.loading = true
  }

  isOverLoading() {
    NProgress.done()
    document.body.scrollTop = 0
    this.loading = false
  }

  render() {
    return (
      <div className={style["g-result"]}>
        <ResultHeader className={style["m-result-header"]}/>
        <SearchBar title={Util.getUrlParam(this.props.location.search, 'q') || ''} onSearch={(val) => this.handlerSearch(val)} />
        <Split className={style["m-split-1"]}/>
        
        <main className={style["m-main"]}>
          <SearchResult condition={this.state.condition} 
                  isLoading={this.isLoading.bind(this)} 
                  isOverLoading={this.isOverLoading.bind(this)} 
                  prevPage={this.prevPage.bind(this)} 
                  nextPage={this.nextPage.bind(this)}/>
        </main>
        <Footer className={style["m-result-footer"]}/>
      </div>
    )
  }
}

