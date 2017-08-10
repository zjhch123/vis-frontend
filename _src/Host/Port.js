import React from 'react';
import style from './Port.scss';

export default class Port extends React.Component {
  render() {
    return (
      <div className={style["g-container"]}>
        <span>{this.props.title}</span>
      </div>
    )
  }
}