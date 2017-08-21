import React from 'react';
import style from './SearchBar.scss';
import Split from '../Split/Split';
import IMGLogo from '../Logo/IMGLogo';

export default ({title, detail, inputValueChange, submitClick}) => (
  <div className={`${style.cSearchBar}`}>
    <div className={style.mRow1}>
      <div className={style.mLogo}>
        <IMGLogo className={style.uLogoImg} src={require('../../resource/image/logo.png')} width="56px" height="56px"/>
        <div className={style.uLogoLabel}>
          <p className={style.uLogoTitle}>鉴势</p>
          <p className={style.uLogoSubtitle}>工控设备搜索平台</p>
        </div>
      </div>
      <div className={style.mForm}>
        <input type="text" className={style.uInput}  
              placeholder="请输入查询条件"
              defaultValue={title || ''} 
              onChange={(e) => inputValueChange(e)}/>
        <a className={style.mBtn} 
            onClick={() => submitClick()}>
            立即鉴势
        </a>
      </div>
      <span className={style.uTip}>数据最新获取时间：2017年07月06日</span>
    </div>
    { 
      detail &&
        <div className={style.mRow2}>
          <a className={`${style.uTab} active`}>搜索结果</a>
          <a className={style.uTab}>概览</a>
        </div>
    }
    <Split />
  </div>
)


