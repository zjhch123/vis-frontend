import React from 'react';
import style from './Result.scss';

export default class DefaultResult extends React.Component {
  render() {
    return (
      <div className={style["defaultResult"]}><h1>{this.props.title}</h1></div>
    )
  }
}