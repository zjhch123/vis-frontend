import React from 'react';
import IMGLogo from '../Logo/IMGLogo';
import style from './Brand.scss';

export default ({className}) => (
  <div className={`${style.cBrand} ${className || ''}`}>
    <IMGLogo className={style.uLogoImg} src={require('../../resource/image/main_logo.png')} width="40px" height="40px"/>
    <div className={style.uLogoLabel}>
      <p className={style.uLogoSubtitle}>工业安全态势感知平台系统</p>
    </div>
  </div>
)