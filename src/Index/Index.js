import React from 'react';
import Header from '../Commons/Header.js';
import Footer from '../Commons/Footer.js';
import Main from './Main.js';
import style from './Index.scss';

export default class Index extends React.Component {
  render() {
    return (
      <div className={style["g-index"]}>
        <Header className={style["g-header"]}/>
        <Main className={style["g-main"]}/>
        <Footer className={style["g-footer"]}/>
      </div>
    )
  }
} 