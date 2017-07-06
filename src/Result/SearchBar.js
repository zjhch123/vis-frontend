import React from 'react';
import style from './SearchBar.scss';

export default class SearchBar extends React.Component {
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
  render() {
    return (
      <div className={style["m-container"]}>
        <div className={style["m-logo"]}>
          <img src={require('../image/logo.png')}/>
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
          <a href="javascript:;" className={style["m-btn"]} ref="btn"  
                onClick={() => {this.handlerClick(this.props.onSearch)}}>立即鉴势</a>
        </div>
      </div>
    )
  }
}


