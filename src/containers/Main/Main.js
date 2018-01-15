import React from 'react';
import Header from '../../components/IndexHeader/Header';
import IMGLogo from '../../components/Logo/IMGLogo';
import Button from '../../components/Button/Button';
import Footer from '../../components/IndexFooter/Footer';
import { Link } from 'react-router-dom';
import URL from '../../link';
import style from './Main.scss';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.timeInterval = null;
    this.scrollInput = ['port:102', 'country:cn', 'module:s7', 'port:502 country:cn'];
    this.scrollIndex = 1;
    this.queryCondition = 'port:102';
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.timeInterval = setInterval(() => {
      let inputValue = this.scrollInput[this.scrollIndex];
      this.refs.searchInput.setAttribute('placeholder', inputValue);
      if (this.refs.searchInput.value === '') {
        this.queryCondition = inputValue;
      }
      this.scrollIndex = (this.scrollIndex + 1) % 4;
    }, 2000);
  }
  
  componentWillUnmount() {
    window.clearInterval(this.timeInterval);
  }

  handlerChange(event) {
    this.queryCondition = event.target.value;
  }

  handlerKeyDown(e) {
    if (e.keyCode === 13) {
      this.props.StartSearch(this.queryCondition);
    }
  }

  render() {
    return (
      <div className={style.cMain}>
        <Header />
        <main className={style.gMain}>
          <div className={style.mMain}>
            <IMGLogo className={style.uLogo} src={require('../../resource/image/main_logo.png')} width="110px" height="110px" />
            <h1 className={style.uTitle}>工业安全态势感知平台系统</h1>
            <div className={style.mInput}>
              <input type="text" className={style.uInput} ref="searchInput" placeholder={this.scrollInput[0]} onChange={(e) => this.handlerChange(e)} onKeyDown={(e) => this.handlerKeyDown(e)}/>
            </div>
            <div className={style.mBtnGroup}>
              <Button title="搜索一下" className={style.uBtn} type="blue" onClick={() => this.props.StartSearch(this.queryCondition)}/>
              <Link to={URL.HighSearch} className={`${style.uBtn} ${style.uSearch}`}>高级搜索</Link>
            </div>
            <div className={style.mTip}>
              { /*<p className={style.uTip}>提示:按下Shift+/显示帮助</p>*/}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
    StartSearch: (condition) => {
      condition && dispatch(push({
        pathname: '/search',
        location: '/search',
        search: `q=${condition}&_=${Date.now()}`
      }));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
