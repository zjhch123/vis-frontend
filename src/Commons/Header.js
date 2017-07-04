import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className={'common-header ' + this.props.className}>
        <div className="g-left">
          <Link to="/" className="m-logo link-item">鉴势</Link>
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