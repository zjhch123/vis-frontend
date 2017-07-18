import React from 'react'
import style from './Banner.scss'



export default class Banner extends React.Component {
  render() {
    return (
      <div className={style["g-container"]} style={{"backgroundImage": `url(${this.props.src})`}}>
        <div className={style["g-inner"]}>
          {this.props.children}
        </div>
      </div>
    )
  }
}