import React from 'react';
import ResultItem from './ResultItem.js';
import $ from 'jquery';
import Util from '../Util/Util.js';
import DefaultResult from './DefaultResult.js';
import style from './SearchResult.scss';
import ListItem from './ListItem.js';

export default class SearchResult extends React.Component {

  constructor() {
    super()
    this.state = {
      result: [],
      nowPage: 0,
      totalPage: 0,
      totalCount: 0,
      time: 0,
      loading: true,
      groupByCountry: [],
      groupByOrg: [],
      groupByPort:[],
      groupByTags:[],
    }
    this.renders = [
      this.renderQuery,
      this.renderGroupByCountry,
      this.renderGroupByOrg,
      this.renderGroupByPort,
      this.renderGroupByTags,
      this.renderCoordinate
    ]
  }

  renderQuery(data) {
    let totalPage = parseInt(data.total % data.pageSize === 0 ? data.total / data.pageSize : data.total / data.pageSize + 1)
    this.setState({
      result: data.result,
      time: data.time,
      totalCount: data.total,
      nowPage: data.page,
      totalPage: totalPage
    })
  }

  renderGroupByCountry(data) {
    this.setState({
      groupByCountry: data["aggregations"]["location.country_name_row"]["buckets"]
    })
  }

  renderGroupByOrg(data) {
    this.setState({
      groupByOrg: data["aggregations"]["org_row"]["buckets"]
    })
  }

  renderGroupByPort(data) {
    this.setState({
      groupByPort: data["aggregations"]["port"]["buckets"]
    })
  }

  renderGroupByTags(data) {
    this.setState({
      groupByTags: data["aggregations"]["tags"]["buckets"]
    })
  }

  renderCoordinate(data) {
  }

  request() {
    if(this.props.condition.q === '') {
      return
    }
    this.setState({
      loading: true
    })
    this.props.isLoading()
    let promises = [
     'ics/query', 
     'ics/group?by=country&limit=7&sort=-1', 
     'ics/group?by=org&limit=5&sort=-1', 
     'ics/group?by=port&limit=5&sort=-1',
     'ics/group?by=tags&limit=5&sort=-1',
     // 'map/coordinateArr'
     ].map((url) => {
      return $.getJSON({
        url: "http://139.129.132.196:4399/" + url,
        data: this.props.condition
      });
     });
     
     Promise.all(promises).then((data) => {
      for(let i = 0;i < data.length; i++) {
        this.renders[i].call(this, data[i]);
      }
      this.setState({
        loading: false
      })
      this.props.isOverLoading()
     });
  }

  requestPage() {
    if(this.props.condition.q === '') {
      return
    }
    this.props.isLoading()
    let promises = [
     'ics/query', 
     ].map((url) => {
      return $.getJSON({
        url: "http://139.129.132.196:4399/" + url,
        data: this.props.condition
      });
     });
     
     Promise.all(promises).then((data) => {
      for(let i = 0;i < data.length; i++) {
        this.renders[i].call(this, data[i]);
      }
      this.props.isOverLoading()
     });
  }

  componentDidMount() {
    this.request()
  }

  componentWillReceiveProps(nextProps) {
    if(Util.objIsEquals(nextProps.condition, this.props.condition)) {
      return
    } else if(this.props.condition.q === nextProps.condition.q && this.props.condition.pageSize === nextProps.condition.pageSize) {
      this.requestPage()
    } else {
      this.props.condition.q = nextProps.condition.q
      this.props.condition.page = nextProps.condition.page
      this.props.condition.pageSize = nextProps.condition.pageSize
      this.request()
    }
  }

  status() {
    let resultItems = this.state.result.slice(0)
    let item = null;
    if(this.props.condition.q === '') {
      item = <DefaultResult title="请输入查询条件"/>
    } else if(this.state.loading) {
      item = <DefaultResult title="正在查询"/>
    } else if(!this.state.loading && resultItems.length === 0){
      item = <DefaultResult title={`未找到和 ${this.props.condition.q} 相关的结果`}/>
    } 
    return item
  }

  prevPage() {
    if(this.state.nowPage === 1) return
    this.props.prevPage()
  }

  nextPage() {
    if(this.state.nowPage === this.state.totalPage) return
    this.props.nextPage()
  }

  renderMain() {
    let resultItems = this.state.result.slice(0)
    return (
        <div className={style["m-container"]}>
          <div className={style["m-left"]}>
            <div id="temp" ref="temp"></div>
            <ListItem data={this.state.groupByPort} title="端口"/>
            <ListItem data={this.state.groupByCountry} title="国家分布"/>
            <ListItem data={this.state.groupByOrg} title="企业分布"/>
            <ListItem data={this.state.groupByTags} title="设备类型分布"/>
          </div>
          <div className={style["m-right"]}>
            <p className={style["u-title"]}>搜索结果: {this.state.totalCount}条 耗时: {this.state.time}ms</p>
            {resultItems.map((item) => {return (<ResultItem data={item} key={item.ip_str}/>)})}
          </div>
          <div style={{textAlign: 'center', width: '100%'}}>
            {this.state.nowPage > 1 && <a href="javascript:;" className={style["m-page"]} onClick={this.prevPage.bind(this)}>上一页</a>}
            {this.state.nowPage < this.state.totalPage && <a href="javascript:;" className={style["m-page"]} onClick={this.nextPage.bind(this)}>下一页</a>}
          </div>
        </div>
      )
  }

  render() {
    let item = this.status();
    return item === null ? this.renderMain() : (<div className={style["m-container-error"]}>{item}</div>);
  }
}
