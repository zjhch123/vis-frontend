import React from 'react';
import style from './Footer2.scss';
import Footer from './Footer';
import {NavLink} from 'react-router-dom';
import LinkGroup from './LinkGroup';

export default function Footer2() {
  return (
    <div className={style["g-container"]}>
      <div className={style["g-row"]}>
        <LinkGroup className={style["g-group1"]} title="主导航">
          <NavLink exact to="/index">首页</NavLink>
          <NavLink exact to="/result">势窗</NavLink>
          <NavLink exact to="/1">势界</NavLink>
          <NavLink exact to="/2">开放API</NavLink>
        </LinkGroup>
        <LinkGroup className={style["g-group2"]} title="更多">
          <NavLink exact to="/module">协议支持</NavLink>
          <NavLink exact to="/topic">专题报告</NavLink>
          <NavLink exact to="/upload">提交检测</NavLink>
          <NavLink exact to="/log">更新记录</NavLink>
        </LinkGroup>
        <LinkGroup className={style["g-group3"]} title="支持">
          <NavLink exact to="/help">用户手册</NavLink>
          <NavLink exact to="/reply">反馈</NavLink>
          <NavLink exact to="/about">关于我们</NavLink>
        </LinkGroup>
      </div>
      <div className={style["g-row"]}>
        <LinkGroup className={style["g-group3"]} title="联系我们">
          <a to="mail:zjhch123@gmail.com">mailto: zjhch123@gmail.com</a>
          <span>杭州电子科技大学 - 觅迹寻踪团队</span>
        </LinkGroup>
      </div>
      <Footer />
    </div>
  )
}