import React from 'react';
import style from './ResultHeader.scss';
import { Link } from 'react-router-dom';

export default class ResultHeader extends React.Component {
  render() {
    return (
      <header className={style['header'] + ' ' + this.props.className}>
        <div className={style["g-left"]}>
          <div className={style["m-logo"]}>
            <div className={style["img"]}>
              <img src={require('../image/logo.png')} alt="logo"/>
            </div>
            <div className={style["label"]}>
              <p className={style["title"]}>鉴势</p>
              <p className={style["subtitle"]}>工控设备搜索平台</p>
            </div>
          </div>
        </div>
        <div className={style["m-form"]}>
          <input type="text" placeholder="请输入查询条件"/><a href="javascript:;" className={style["search"]}>GO</a>
        </div>
        <div className={style["g-right"]}>
          <Link to="/" className={style["link-item"]}>首页</Link>
          <Link to="/result" className={style["link-item"]}>势窗</Link>
          <Link to="/" className={style["link-item"]}>势界</Link>
          <Link to="/" className={style["link-item"]}>开放API</Link>
          <Link to="/" className={style["link-item"]}>帮助</Link>
          <Link to="/" className={style["link-item"]}>关于我们</Link>
        </div>
      </header>
    )
  }
}