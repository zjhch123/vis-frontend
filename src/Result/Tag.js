import React from 'react';
import style from './Tag.scss';

export default class Tag extends React.Component {
  render() {
    return (
      <span className={style.tag} style={{backgroundColor:this.props.type}}>{this.props.title}</span>
    )
  }
}