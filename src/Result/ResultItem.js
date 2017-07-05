import React from 'react';
import Tag from '../Commons/Tag.js';
import style from './ResultItem.scss';

export default class ResultItem extends React.Component {
  render() {
    return (
      <div className={style["m-result-item"]}>
        <p className={style["u-ip"]}>139.129.132.196</p>
        <div className={style["m-left"]}>
          <div className={style["u-tag"]}>
            <Tag type="red" title="ics"/><Tag type="#6666CC" title="s7"/>
          </div>
          <p className={style["u-country"]}>China</p>
          <p className={style["u-org"]}>Alibaba.Hangzhou Inc</p>
        </div>
        <div className={style["m-right"]}>
          <div className={style["u-detail"]}>
          Copyright: Original Siemens Equipment<br/>
          PLC name: S104_IM151PN<br/>
          Module type: IM151-8 PN/DP CPU<br/>
          Unknown (129): Boot Loader A<br/>
          Module: 6ES7 151-8AB00-0AB0 v.0.2<br/>
          Basic Firmware: v.2.7.1<br/>
          Module name: IM151-8 PN/DP CPU<br/>
          Serial number of module: S C-ADTG50632010<br/>
          Plant identification: <br/>
          Basic Hardware: 6ES7 151-8AB00-0AB0 v.0.2<br/>
          </div>
        </div>
      </div>
    )
  }
}