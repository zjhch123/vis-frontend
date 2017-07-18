import React from 'react';
import style from './ResultHeader.scss';
import { Link, NavLink } from 'react-router-dom';

export default class ResultHeader extends React.Component {

  render() {
    return (
      <header className={style['header'] + ' ' + this.props.className}>
        <div className={style["g-left"]}>
          <NavLink exact to="/" className={style["link-item"]} activeClassName={style["active"]}>首页</NavLink>
          <NavLink exact to="/result" className={style["link-item"]} activeClassName={style["active"]}>势窗</NavLink>
          <NavLink exact to="/" className={style["link-item"]} activeClassName={style["active"]}>势界</NavLink>
          <NavLink exact to="/" className={style["link-item"]} activeClassName={style["active"]}>开放API</NavLink>
          <NavLink exact to="/help" className={style["link-item"]} activeClassName={style["active"]}>帮助</NavLink>
          <NavLink exact to="/about" className={style["link-item"]} activeClassName={style["active"]}>关于我们</NavLink>
        </div>
        <div className={style["g-right"]}>
          <Link to="/register" className={style["link-item"]}>注册</Link>
          <Link to="/login" className={style["link-item"]}>登录</Link>
        </div>
      </header>
    )
    // return (
    //   <header className={style['header'] + ' ' + this.props.className}>
    //     <div className={style["g-left"]}>
    //       <Link to="/" style={{display: "block", height: "48px", outline: "none", backgroundImage: "url(about:blank)"}}>
    //         <div className={style["m-logo"]}>
    //           <div className={style["img"]}>
    //             <img src={require('../image/logo.png')} alt="logo"/>
    //           </div>
    //           <div className={style["label"]}>
    //             <p className={style["title"]}>鉴势</p>
    //             <p className={style["subtitle"]}>工控设备搜索平台</p>
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //     <div className={style["m-form"]}>
    //       <input type="text" placeholder="请输入查询条件" ref="searchInput" defaultValue={this.props.title || ''} onKeyDown={(event) => this.handlerKeyDown(event)}/><a href="javascript:;" ref="btn" className={style["search"]} onClick={() => {this.handlerClick(this.props.onSearch)}}>GO</a>
    //     </div>
    //     <div className={style["g-right"]}>
    //       <Link to="/" className={style["link-item"]}>首页</Link>
    //       <Link to="/result" className={style["link-item"]}>势窗</Link>
    //       <Link to="/" className={style["link-item"]}>势界</Link>
    //       <Link to="/" className={style["link-item"]}>开放API</Link>
    //       <Link to="/" className={style["link-item"]}>帮助</Link>
    //       <Link to="/" className={style["link-item"]}>关于我们</Link>
    //     </div>
    //   </header>
    // )
  }
}