import React from 'react';
import style from './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import URL from '../../link';

export default ({className}) => (
  <header className={`${style.cHeader} ${className}`}>
    <div className={style.gLeft}>
      <NavLink exact to={URL.Index} className={style.uLinkItem} activeClassName={style.active}>首页</NavLink>
      <NavLink exact to={URL.ShiChuang} className={style.uLinkItem} activeClassName={style.active}>势窗</NavLink>
      <a href={URL.ShiJie} className={style.uLinkItem}>势界</a>
      <NavLink exact to={URL.OpenAPI} className={style.uLinkItem} activeClassName={style.active}>开放API</NavLink>
      <a href={URL.Help} className={style.uLinkItem}>帮助</a>
      <NavLink exact to={URL.About} className={style.uLinkItem} activeClassName={style.active}>关于我们</NavLink>
    </div>
    <div className={style.gRight}>
      <Link to={URL.Register} className={style.uLinkItem}>注册</Link>
      <Link to={URL.Login} className={style.uLinkItem}>登录</Link>
    </div>
  </header>
)