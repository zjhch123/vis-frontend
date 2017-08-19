import React from 'react';
import Header from '../../components/IndexHeader/Header';
import MainLogo from '../../components/MainLogo/MainLogo';
import Footer from '../../components/IndexFooter/Footer';
import style from './Main.scss';

export default class Main extends React.Component {
  render() {
    return (
      <div className={style.cMain}>
        <Header />
        <main className={style.gMain}>
          <MainLogo />
          <h1 className={style.uTitle}>工控设备在线搜索与可视化平台</h1>
          <div className={style.mInput}>
            <input type="text" className={style.uInput}/>
          </div>
          <div className={style.mBtnGroup}>
            
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}