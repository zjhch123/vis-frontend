import React from 'react';
import style from './Total.scss';

export default class Total extends React.Component {
  constructor(props) {
    super(props)
    this.data = props.data.result
    this.online = {}
    this.offline = {}
    this.total = 0
    this.mappingData();
  }
  mappingData() {
    this.total = 0
    this.data.online.forEach((item) => {
      this.online[item.key] = item.count
      this.total += item.count
    })
    this.data.offline.forEach((item) => {
      this.offline[item.key] = item.count
      this.total += item.count
    })
  }

  componentWillUpdate(newProps) {
    this.data = newProps.data.result
    this.mappingData()
  }

  render() {
    return (
      <div className={`${style.cTotal} ${this.props.className || ''}`}>
        <p>设备总数</p>
        <p>{this.total}</p>
        <p>工控设备数</p>
        <p>{this.online.ics || 0}(扫描平台) {this.offline.ics || 0}(线下核查)</p>
        <p>摄像头</p>
        <p>{this.online.camera}(扫描平台) {this.offline.camera}(线下核查)</p>
        <p>蜜罐</p>
        <p>{this.online.honeypot}(扫描平台) {this.offline.honeypot}(线下核查)</p>
      </div>
    )
  }
}