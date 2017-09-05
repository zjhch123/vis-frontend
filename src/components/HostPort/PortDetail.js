import React from 'react'
import style from './PortDetail.scss'
import Util from '../../util'

export default ({data}) => (
  <div className={style.cPortDetail} key={data.port}>
    <div className={style.mType}>
      <span className={style.uType}>{data.port}</span>
      <span className={style.uType}>{data.transport}</span>
      <span className={style.uType}>{data.module_row}</span>
    </div>
    <div className={style.uData}>
      <p dangerouslySetInnerHTML={{__html: Util.fuckXSS(data.data).replace(/\n+/g, '<br/>')}}>
      </p>
    </div>
  </div>
)
