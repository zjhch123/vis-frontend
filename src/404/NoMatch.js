import React from 'react';
import style from './NoMatch.scss';
import Split from '../Commons/Split';
import Header from '../Commons/ResultHeader.js';
import SearchBar from '../Result/SearchBar';
import Footer from '../Commons/Footer2.js';
import {Link, Redirect} from 'react-router-dom';

export default class NoMatch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        q: '',
    }
  }

  handlerSearch(val) {
    this.setState({
      q: val
    })
  }

  render() {
    const query = this.state.q;
    if(query !== '') {
      return (
        <Redirect push to={{
          pathname: '/result',
          search: 'q=' + query
        }}/>
      )
    }
    return (
      <div className={this.props.className}>
        <Header />
        <SearchBar detail={false} title="" onSearch={(val) => this.handlerSearch(val)}/>
        <main className={style["g-container"]}>
          <h1>:( 页面还在架构中</h1>
          <h2>这个页面被吸入了宇宙的洪流中，您可以尝试<Link to="/index">返回首页</Link></h2>
        </main>
        <Split />
        <Footer />
      </div>
    )
  }
}