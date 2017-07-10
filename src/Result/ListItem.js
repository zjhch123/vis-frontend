import React from 'react';
import Item from './Item.js';
import style from './ListItem.scss';
import Split from '../Commons/Split.js';

export default class ListItem extends React.Component {
  render() {
    return (
    <div>
      <p className={style["m-title"]}>{this.props.title}</p>  
      <div>
        {
          this.props.data.map((data) => {
            return <Item data={data} key={data.key}/>
          })
        }
      </div>
      <Split />
    </div>)
  }
}