import React from 'react';
import Header from '../Commons/Header.js';
import Footer from '../Commons/Footer.js';
import Main from './Main.js';
import style from './Index.scss';

export default class Index extends React.Component {
  render() {
    return (
      <div className={style.g_index}>
        <Header className={style.g_header}/>
        <Main className={style.g_main}/>
        <Footer className={style.g_footer}/>
      </div>
    )
  }
}