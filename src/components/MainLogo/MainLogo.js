import React from 'react';
import style from './MainLogo.scss';

export default ({className}) => (
  <div className={`${style.uLogo} ${className}`}>
    <iframe title="logo" src={require('../../resource/image/logo.svg')} className={style.logo} frameborder="0" scrolling="no"></iframe>
  </div>
)