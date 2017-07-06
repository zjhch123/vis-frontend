import React from 'react';
import Tag from '../Commons/Tag.js';
import Split from '../Commons/Split.js';
import style from './ResultItem.scss';
import Util from '../Util/Util.js';

export default class ResultItem extends React.Component {
  render() {
    let data = this.props.data;
    return (
      <div className={style["m-result-item"]}>
        <div className={style["u-content"]}>
          <p className={style["u-ip"]}>{data.ip_str}</p>
          <div className={style["m-left"]}>
            <div className={style["u-tag"]}>
              <Tag type="red" title={data.module}/><Tag type="#6666CC" title={data.tags}/>
            </div>
            <p className={style["u-country"]}>{data["location.country_name"]}</p>
            <p className={style["u-org"]}>{data.org}</p>
          </div>
          <div className={style["m-right"]}>
            <div className={style["u-detail"]} dangerouslySetInnerHTML={{__html: Util.fuckXSS(data.data).replace(/\n/g, '<br/>')}}>
            </div>
          </div>
        </div>
        <Split />
      </div>
    )
  }
}