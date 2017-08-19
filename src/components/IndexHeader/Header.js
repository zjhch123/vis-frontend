import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import style from './Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className={`${style.cHeader} ${this.props.className} f-cb`}>
        <div className={style.gLeft}>
          <Link to="/" className={`${style.mLogo} ${style.uLinkItem}`}>鉴势</Link>
        </div>
        <div className={style.gRight}>
          <Link to="/" className={style.uLinkItem}>首页</Link>
          <NavLink exact to="/result" className={style.uLinkItem} activeClassName={style.active}>势窗</NavLink>
          <a href="http://139.129.132.196/ics/vis.html" className={style.uLinkItem}>势界</a>
          <NavLink exact to="/open" className={style.uLinkItem} activeClassName={style.active}>开放API</NavLink>
          <a href="http://139.129.132.196/ics/help.html" className={style.uLinkItem}>帮助</a>
          <NavLink exact to="/about" className={style.uLinkItem} activeClassName={style.active}>关于我们</NavLink>
        </div>
      </header>
    )
  }
}