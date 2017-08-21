import React from 'react';
import style from './IndexLogo.scss';

export default ({className}) => (
  <div className={`${style.uLogo} ${className || ''}`}>
    <iframe title="logo" src={require('../../resource/image/logo.svg')} className={style.logo} frameBorder="0" scrolling="no"></iframe>
  </div>
)