import React from 'react';
import Item from './Item.js';
import style from './ItemList.scss';
import Split from '../Split/Split';

export default ({title, data, condition}) => (
  <div>
    <p className={style.uTitle}>{title}</p>  
    <div>
      {
        data.buckets.map((_d, index) => <Item data={_d} key={index} condition={condition}/>)
      }
    </div>
    <Split />
  </div>
)
