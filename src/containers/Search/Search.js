import React from 'react';
import style from './Search.scss';
import Header from '../../components/ResultHeader/Header';
import Footer from '../../components/ResultFooter/Footer';
import SearchBar from '../../components/ResultHeader/SearchBar';
import ItemList from '../../components/ItemList/ItemList';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Util from '../../util';
import {SearchAction} from '../../actions';
import ResultItem from '../../components/ResultItem/ResultItem';

const Tip = ({title}) => (
  <div className={style.cSearchTip}>
    <h1>{title}</h1>
  </div>
)

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.mapQueryCondition();
  }

  componentDidMount() {
    this.props.dispatch(SearchAction(this.title, this.page, this.pageSize));
  }

  componentWillUpdate(nextProps) {
    this.mapQueryCondition();
  }

  mapQueryCondition() {
    this.title = Util.getUrlParam(nextProps.location.search, 'q') || '';
    this.page = Util.getUrlParam(this.props.location.search, 'page') || 1;
    this.pageSize = Util.getUrlParam(this.props.location.search, 'pageSize') || 10;
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
    this.props.dispatch(SearchAction(this.searchBarInputValue, this.page, this.pageSize));
  }

  renderNotInpuView() {
    return <Tip title="请输入搜索条件" />
  }  

  renderLoadingView() {
    return <Tip title="正在查询" />
  }

  renderOverLoadingView() {
    return this.props.searchResult.result === false ? this.renderSearchErrorView() : this.renderSearchSuccessView(this.props.searchResult.result);
  }

  renderSearchErrorView() {
    return <Tip title="服务器开小差了，请重新查询 :（" />
  }

  renderNoResultView() {
    return <Tip title={`未找到和${this.title}相关的结果 :（`} />
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
          {`<aside>
            <ItemList data={{}} title="端口" condition="port"/>
            <ItemList data={{}} title="国家分布" condition="countryName"/>
            <ItemList data={{}} title="企业分布" condition="org"/>
            <ItemList data={{}} title="设备类型分布" condition="tags"/>
          </aside>`}
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
  searchResult: state.search
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);




