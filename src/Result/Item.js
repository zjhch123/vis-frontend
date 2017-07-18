import React from 'react';
import style from './Item.scss';
import Util from '../Util/Util.js';
import {Link} from 'react-router-dom';

export default class Item extends React.Component {
  render() {
    return (
      <div className={style["g-container"]}>
        <a  className={style["g-left"]} href={`/result?q=${Util.getUrlParam(window.location.search, 'q')} ${this.props.condition}:"${this.props.data.key}"`}>{this.props.data.key}</a>
        <span className={style["g-right"]}>{this.props.data.doc_count}</span>
      </div>
    )
  }
}