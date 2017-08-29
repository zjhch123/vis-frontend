import React from 'react';
import Item from './Item.js';
import style from './ItemList.scss';
import Split from '../Split/Split';

export default ({title, data, condition}) => (
  <div>
    <p className={style.uTitle}>{title}</p>  
    <div>
      {
        data.map((data, index) => <Item data={data} key={index} condition={condition}/>)
      }
    </div>
    <Split />
  </div>
)
