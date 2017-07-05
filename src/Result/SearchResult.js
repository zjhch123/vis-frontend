import React from 'react';
import $ from 'jquery';
import ResultItem from './ResultItem.js';


export default class SearchResult extends React.Component {
  constructor() {
    super()
  }

  query(condition) {
    $.getJSON({
      url: "http://139.129.132.196:4399/ics/query?page=1&pageSize=10",
      data: {q: condition}
    }).then(function(data) {
      console.log(data);
    });
  }

  render() {
    let condition = this.props.match.params.query
    this.query(condition)
    return (
      <div>
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
      </div>
    )
  }
}