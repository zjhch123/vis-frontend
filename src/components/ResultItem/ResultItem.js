import React from 'react';
import {Link} from 'react-router-dom';
import style from './ResultItem.scss';
import Tag from './Tag.js';
import Split from '../Split/Split';
import Util from '../../util';

export default ({data}) => (
  <div className={style.cResultItem}>
    <div className={style.mContent}>
      <p><Link className={style.uIp} to={`/host?q=ip:${data.ip_str}`}>{data.ip_str}</Link></p>
      <div className={style.mLeft}>
        <div className={style.uTag}>
          <Tag type="red" title={data.module}/><Tag type="#6666CC" title={data.tags}/>
        </div>
        <p className={style.uCountry}>{data["location.country_name"]}</p>
        <p className={style.uOrg}>{data.org}</p>
      </div>
      <div className={style.mRight}>
        <div className={style.uDetail} dangerouslySetInnerHTML={{__html: Util.fuckXSS(data.data).replace(/\n/g, '<br/>')}}>
        </div>
      </div>
    </div>
    <Split />
  </div>
)
