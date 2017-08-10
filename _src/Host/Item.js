import React from 'react';
import style from './Item.scss';
import Split from '../Commons/Split.js';
export default class Item extends React.Component {
  render() {
    return (
      <div>
        <div className={style["g-container"]}>
          <span className={style["u-title"]}>{this.props.title}</span>
          <span className={style["u-value"]}>{this.props.value}</span>
        </div>
        <Split />
      </div>
    )
  }
}