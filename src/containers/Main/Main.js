import React from 'react';
import Header from '../../components/IndexHeader/Header';
import IndexLogo from '../../components/IndexLogo/IndexLogo';
import Button from '../../components/Button/Button';
import Footer from '../../components/IndexFooter/Footer';
import style from './Main.scss';
import { connect } from 'react-redux';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.timeInterval = null;
    this.scrollInput = ['port:102', 'country:cn', 'module:s7', 'port:502 country:cn'];
    this.scrollIndex = 1;
  }

  componentDidMount() {
    this.timeInterval = setInterval(() => {
      let inputValue = this.scrollInput[this.scrollIndex];
      this.refs.searchInput.setAttribute('placeholder', inputValue);
      this.scrollIndex = (this.scrollIndex + 1) % 4;
    }, 2000);
  }
  
  componentWillUnmount() {
    window.clearInterval(this.timeInterval);
  }

  render() {
    return (
      <div className={style.cMain}>
        <Header />
        <main className={style.gMain}>
          <div className={style.mMain}>
            <IndexLogo />
            <h1 className={style.uTitle}>工控设备在线搜索与可视化平台</h1>
            <div className={style.mInput}>
              <input type="text" className={style.uInput} ref="searchInput" placeholder={this.scrollInput[0]}/>
            </div>
            <div className={style.mBtnGroup}>
              <Button title="鉴势一下" className={style.uBtn} type="blue" onClick={() => console.log(1)}/>
              <Button title="高级搜索" className={style.uBtn} type="gray" onClick={() => console.log(1)}/>
            </div>
            <div className={style.mTip}>
              <p className={style.uTip}>提示:按下Shift+/显示帮助</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}


export default Main;