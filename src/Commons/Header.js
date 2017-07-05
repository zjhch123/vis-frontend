import React from 'react';
import {Link} from 'react-router-dom';
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