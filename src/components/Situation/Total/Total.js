import React from 'react';
import style from './Total.scss';

export default class Total extends React.Component {
  render() {
    return (
      <div className={`${style.cTotal} ${this.props.className || ''}`}>
        <p>设备总数</p>
        <p>1360</p>
        <p>工控设备数</p>
        <p>1341(扫描平台) 670(线下核查)</p>
        <p>摄像头</p>
        <p>16(扫描平台) 325(线下核查)</p>
        <p>蜜罐</p>
        <p>3(扫描平台) 0(线下核查)</p>
      </div>
    )
  }

}