import React from 'react';
import style from './SearchBar.scss';
import Split from '../Split/Split';
import Brand from '../Brand/Brand';

export default ({title, detail, inputValueChange, submitClick, activePage, changePageType}) => (
  <div className={`${style.cSearchBar}`}>
    <div className={style.mRow1}>
      <Brand className={style.mBrand}/>
      <div className={style.mForm}>
        <input type="text" className={style.uInput}  
              placeholder="请输入查询条件"
              defaultValue={title || ''} 
              onChange={(e) => inputValueChange(e)}
              onKeyDown={(e) => e.keyCode === 13 && submitClick()}/>
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
          <a className={`${style.uTab} ${activePage === 0 ? 'active' : ''}`} onClick={(e) => changePageType(0)}>搜索结果</a>
          <a className={`${style.uTab} ${activePage === 1 ? 'active' : ''}`} onClick={(e) => changePageType(1)}>概览</a>
        </div>
    }
    <Split />
  </div>
)


