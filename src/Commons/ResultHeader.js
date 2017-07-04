import React from 'react';
import './Header.scss';
import './ResultHeader.scss';
import { Link } from 'react-router-dom';

export default class ResultHeader extends React.Component {
  render() {
    return (
      <header className={'result-header common-header ' + this.props.className}>
        <div className="g-left">
          <div className="m-logo">
            <div className="img">
              <img src={require('../image/logo.png')} alt="logo"/>
            </div>
            <div className="label">
              <p className="title">鉴势</p>
              <p className="subtitle">工控设备搜索平台</p>
            </div>
          </div>
        </div>
        <div className="m-form">
          <input type="text" placeholder="请输入查询条件"/><a href="javascript:;" className="search">GO</a>
        </div>
        <div className="g-right">
          <Link to="/" className="link-item">首页</Link>
          <Link to="/result" className="link-item">势窗</Link>
          <Link to="/" className="link-item">势界</Link>
          <Link to="/" className="link-item">开放API</Link>
          <Link to="/" className="link-item">帮助</Link>
          <Link to="/" className="link-item">关于我们</Link>
        </div>
      </header>
    )
  }
}