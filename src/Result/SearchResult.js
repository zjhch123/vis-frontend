import React from 'react';
import $ from 'jquery';
import ResultItem from './ResultItem.js';


export default class SearchResult extends React.Component {
  constructor() {
    super()
    this.state = {
      result: []
    }
  }

  query(condition) {
    let self = this
    return $.getJSON({
      url: "http://139.129.132.196:4399/ics/query?page=1&pageSize=10",
      data: {q: condition}
    });
  }

  componentDidMount() {
    let condition = this.props.match.params.query
    this.query(condition).then((data) => {
      this.setState({
        result: data.result
      })
    })
  }

  render() {
    let resultItems = this.state.result.slice(0)
    let resultItemsList = resultItems.map((item) => {
      return (<ResultItem data={item} key={item.ip_str}/>)
    })
    return (
      <div>
        {resultItemsList}
      </div>
    )
  }
}