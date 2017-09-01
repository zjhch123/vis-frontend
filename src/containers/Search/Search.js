import React from 'react';
import style from './Search.scss';
import Header from '../../components/ResultHeader/Header';
import Footer from '../../components/ResultFooter/Footer';
import SearchBar from '../../components/ResultHeader/SearchBar';
import ItemList from '../../components/ItemList/ItemList';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Util from '../../util';
import {SearchAction, GroupAction} from '../../actions';
import ResultItem from '../../components/ResultItem/ResultItem';

const Tip = ({title}) => (
  <div className={style.cSearchTip}>
    <h1>{title}</h1>
  </div>
)

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.mapQueryCondition(props);
  }

  componentDidMount() {
    this.dispatchSearch(this.title, this.page, this.pageSize);
    this.groupCondition(this.title);
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

  groupCondition(condition) {
    this.dispatchGroup(condition, 'port', 5, -1, 10);
    this.dispatchGroup(condition, 'tags', 5, -1, 10);
    this.dispatchGroup(condition, 'org', 5, -1, 10);
    this.dispatchGroup(condition, 'country', 7, -1, 10);
  }

  handlerSearchBarValueChange(e) {
    this.searchBarInputValue = e.target.value;
  }

  handlerSearchBarSubmitClick() {
    this.refreshLocation(this.searchBarInputValue, this.page, this.pageSize);
    this.dispatchSearch(this.searchBarInputValue, this.page, this.pageSize);
    this.groupCondition(this.searchBarInputValue);
  }

  refreshLocation(condition, page, pageSize) {
    this.props.dispatch(push({
      location: '/search',
      search: `q=${condition}&_=${Date.now()}&page=${page}&pageSize=${pageSize}`
    }));
  }

  dispatchSearch(condition, page, pageSize) {
    this.props.dispatch(SearchAction(condition, page, pageSize));
  }

  dispatchGroup(condition, by, limit, order, pageSize) {
    this.props.dispatch(GroupAction({condition, by, limit, order}));
  }

  renderTip(title) {
    return <Tip title={title} />
  }  

  renderLoadingView() {
    return this.renderTip("正在查询");
  }

  renderOverLoadingView() {
    return (this.props.searchResult.result === false ? this.renderSearchErrorView() 
                      : this.renderSearchSuccessView(this.props.searchResult.result));
  }

  renderSearchErrorView() {
    return this.renderTip("服务器开小差了，请重新查询 :（");
  }

  renderNoResultView() {
    return this.renderTip(`未找到和${this.title}相关的结果 :（`);
  }

  renderSearchSuccessView(data) {
    return data.result.length === 0 ? this.renderNoResultView() : (
      <div>
        {data.result.map((item, index) => <ResultItem data={item} key={index}/>)}
      </div>
    )
  }

  renderResultView() {
    if (this.props.searchResult.isLoading) {
      return this.renderLoadingView();
    } else {
      return this.renderOverLoadingView(); 
    }
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
        <SearchBar 
            title={this.title}
            inputValueChange={(e) => this.handlerSearchBarValueChange(e)}
            submitClick={() => this.handlerSearchBarSubmitClick()}
            detail={this.title !== ''}/>
        <main>
          <aside>
          {
            this.props.groupResult.port && !this.props.groupResult.port.isLoading &&
            <ItemList data={this.props.groupResult.port.result.port} title="端口" condition="port"/>
          }
          {
            this.props.groupResult.port && !this.props.groupResult.port.isLoading &&
            <ItemList data={this.props.groupResult['country'].result['location.country_name_row']} title="国家分布" condition="countryName"/>
          }
          {
            this.props.groupResult.port && !this.props.groupResult.port.isLoading &&
            <ItemList data={this.props.groupResult.org.result.org_row} title="企业分布" condition="org"/>
          }
          {
            this.props.groupResult.port && !this.props.groupResult.port.isLoading &&
            <ItemList data={this.props.groupResult.tags.result.tags} title="设备类型分布" condition="tags"/>
          }
          </aside>
          <div>
            {view}
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  location: state.router.location,
  searchResult: state.search,
  groupResult: state.group
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);




