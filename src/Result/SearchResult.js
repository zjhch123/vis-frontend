import React from 'react';

export default class SearchResult extends React.Component {
  render() {
    return (<p>{this.props.match.params.query}</p>)
  }
}