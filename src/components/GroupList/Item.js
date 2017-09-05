import React from 'react';
import style from './Item.scss';
import Util from '../../util/';

export default ({data, condition, percent}) => (
  <div className={style.cItem}>
    <a className={style.gLeft} 
       href={`/search?q=${Util.getUrlParam(window.location.search, 'q')} ${condition}:"${data.key}"`}>{data.key}</a>
    <span className={style.gRight}>{data.doc_count}</span>
    <span className={style.gBg} style={{transform: `translateX(${100 - percent}%)`}}></span>
  </div>
)
