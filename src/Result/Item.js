import React from 'react';
import style from './Item.scss';

export default class Item extends React.Component {
  render() {
    return (
      <div className={style["g-container"]}>
        <span className={style["g-left"]}>{this.props.data.key}</span>
        <span className={style["g-right"]}>{this.props.data.doc_count}</span>
      </div>
    )
  }
}