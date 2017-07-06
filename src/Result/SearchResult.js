import React from 'react';
import ResultItem from './ResultItem.js';
import $ from 'jquery';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Util from '../Util/Util.js';
import DefaultResult from './DefaultResult.js';

export default class SearchResult extends React.Component {

  constructor() {
    super()
    this.state = {
      result: [],
      loading: true
    }
  }

  query() {
    if(this.props.condition.q === '') {
      return
    }
    this.setState({
      loading: true
    })
    NProgress.start()
    $.getJSON({
      url: "http://139.129.132.196:4399/ics/query",
      data: this.props.condition
    }).then((data) => {
      NProgress.done()
      this.setState({
        result: data.result,
        loading: false
      })
    })
  }

  componentDidMount() {
    this.query()
  }

  componentWillReceiveProps(nextProps) {
    if(Util.objIsEquals(nextProps.condition, this.props.condition)) {
    // if(nextProps.condition.q === this.props.condition.q &&
    //    nextProps.condition.page === this.props.condition.page &&
    //    nextProps.condition.pageSize === this.props.condition.pageSize) {
      return
    } else {
      this.props.condition.q = nextProps.condition.q
      this.props.condition.page = nextProps.condition.page
      this.props.condition.pageSize = nextProps.condition.pageSize
      this.query()
    }
  }

  render() {
    let resultItems = this.state.result.slice(0)
    let item = null;
    if(this.props.condition.q === '') {
      item = <DefaultResult title="请输入查询条件"/>
    } else if(this.state.loading) {
      item = <DefaultResult title="正在查询"/>
    } else if(!this.state.loading && resultItems.length === 0){
      item = <DefaultResult title="未找到相关结果"/>
    } else if(!this.state.loading && resultItems.length !== 0) {
      item = resultItems.map((item) => {return (<ResultItem data={item} key={item.ip_str}/>)})
    } else {
      item = <DefaultResult title="请刷新重试"/>
    }
    return (
      <div>
        {item}
      </div>
    )
  }
}