import React from 'react';
import style from './Item.scss';
import Util from '../../util/';

export default ({data, condition}) => (
  <div className={style.cItem}>
    <a className={style.gLeft} 
       href={`/result?q=${Util.getUrlParam(window.location.search, 'q')} ${condition}:"${data.key}"`}>{data.key}</a>
    <span className={style.gRight}>{data.doc_count}</span>
  </div>
)
