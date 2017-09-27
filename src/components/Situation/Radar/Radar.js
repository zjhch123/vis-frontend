import React from 'react';
import style from './Radar.scss';

export default class Radar extends React.Component {

  render() {
    return (
      <div className={style.cRadar}>
        <div className={style.mRadarContainer}>
          <div className={style.uRadar}>
            <div className={style.uPoint}></div>
          </div>
        </div>
        <p className={style.uTip}>暂未发现安全威胁</p>
      </div>
    )
  }

}