import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import style from './Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className={style['header'] + ' ' + this.props.className}>
        <div className={style["g-left"]}>
          <Link to="/" className={style["m-logo"] + " " + style["link-item"]}>鉴势</Link>
        </div>
        <div className={style["g-right"]}>
          <Link to="/" className={style["link-item"]}>首页</Link>
          <NavLink exact to="/result" className={style["link-item"]} activeClassName={style["active"]}>势窗</NavLink>
          <a href="http://139.129.132.196/ics/vis.html" className={style["link-item"]}>势界</a>
          <NavLink exact to="/open" className={style["link-item"]} activeClassName={style["active"]}>开放API</NavLink>
          <a href="http://139.129.132.196/ics/help.html" className={style["link-item"]}>帮助</a>
          <NavLink exact to="/about" className={style["link-item"]} activeClassName={style["active"]}>关于我们</NavLink>
        </div>
      </header>
    )
  }
}