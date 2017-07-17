import React from 'react'
import style from './PortDetail.scss'
import Util from '../Util/Util.js'

export default class PortDetail extends React.Component {
  render() {
    return (
      <div className={style["g-data"]} key={this.props.data.port}>
        <div className={style["m-type"]}>
          <span className={style["u-type"]}>{this.props.data.port}</span>
          <span className={style["u-type"]}>{this.props.data.transport}</span>
          <span className={style["u-type"]}>{this.props.data.module_row}</span>
        </div>
        <div className={style["m-data"]}>
          <p dangerouslySetInnerHTML={{__html: Util.fuckXSS(this.props.data.data).replace(/\n/g, '<br/>')}}>
          </p>
        </div>
      </div>
    )
  }
}