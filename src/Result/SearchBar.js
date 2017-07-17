import React from 'react';
import style from './SearchBar.scss';
import Split from '../Commons/Split.js';
import $ from 'jquery';

export default class SearchBar extends React.Component {

  static defaultProps =  {
    detail: true
  }

  handlerClick(cb) {
    let value = this.refs["searchInput"].value
    cb(value)
  }

  handlerKeyDown(event) {
    if(event.keyCode === 13) {
      this.refs["btn"].click()
      this.refs["searchInput"].blur()
    }
  }

  viewChange(type) {
    this.props.viewChange(type)
    if(type === 0) {
      $(this.refs["search"]).addClass("active")
      $(this.refs["map"]).removeClass("active")
    } else {
      $(this.refs["map"]).addClass("active")
      $(this.refs["search"]).removeClass("active")
    }
  }

  render() {
    return (
      <div className={style["m-container"]}>
        <div className={style["m-row1"]}>
          <div className={style["m-logo"]}>
            <img src={require('../image/logo.png')} alt="logo"/>
            <div className={style["label"]}>
              <p className={style["title"]}>鉴势</p>
              <p className={style["subtitle"]}>工控设备搜索平台</p>
            </div>
          </div>
          <div className={style["m-form"]}>
            <input type="text" className={style["m-input"]}  
                  placeholder="请输入查询条件" ref="searchInput" 
                  defaultValue={this.props.title || ''} 
                  onKeyDown={(event) => this.handlerKeyDown(event)}/>
            <a className={style["m-btn"]} ref="btn"  
                  onClick={() => {this.handlerClick(this.props.onSearch)}}>立即鉴势</a>
          </div>
          <span className={style["u-tip"]}>数据最新获取时间：2017年07月06日</span>
        </div>
        { this.props.detail &&
            <div className={style["m-row2"]}>
              <a className={style["u-tab"] + " active"} ref="search" onClick={() => {this.viewChange(0)}}>搜索结果</a>
              <a className={style["u-tab"]} ref="map" onClick={() => {this.viewChange(1)}}>概览</a>
            </div>
        }
        <Split className={style["m-split-1"]}/>
      </div>
    )
  }
}


