import React from 'react';
import {
  Route
} from 'react-router-dom';
import './Result.scss';
import ResultHeader from '../Commons/ResultHeader.js';
import SearchResult from './SearchResult.js';
import Footer from '../Commons/Footer.js';

const defaultSearchResult = () => (
  <h1 className="defaultResult">请输入查询条件</h1>
)

export default class Result extends React.Component {
  render() {
    return (
      <div className="g-result">
        <ResultHeader className="m-result-header"/>
        <main className="m-main">
        <Route path = {`${this.props.match.url}/:query`} component = {SearchResult}/>
        <Route exact path = { this.props.match.url } component = {defaultSearchResult}/>
        </main>
        <Footer className="m-result-footer"/>
      </div>
    )
  }
}