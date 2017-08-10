import React from 'react'
import style from './BannerTitle.scss'
export default class BannerTitle extends React.Component {
  render() {
    return (
      <div className={style["m-container"]}>
        <img className={style["u-logo"]} src={require('../image/logo_banner.png')} alt="banner"/>
        <div className={style["m-content"]}>
          <p className={style["u-title"]}>{this.props.title}</p>
          <p className={style["u-subtitle"]}>{this.props.subtitle}</p>
        </div>
      </div>
    )
  }
}