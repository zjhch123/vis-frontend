import React from 'react';
import style from './Province.scss';

export default class Province extends React.Component {

  render() {
    return (
      <div className={style.cProvince}>
        <table className={style.mTable}>
          <thead className={style.uThead}>
            <tr>
              <th className={style.id}>#</th>
              <th className={style.province}>省份</th>
              <th className={style.count}>总数</th>
            </tr>
          </thead>
          <tbody className={style.uTbody}>
            <tr>
              <td className={style.id}>1</td>
              <td className={style.province}>福建</td>
              <td className={style.count}>288</td>
            </tr>
            <tr>
              <td className={style.id}>2</td>
              <td className={style.province}>广东</td>
              <td className={style.count}>96</td>
            </tr>
            <tr>
              <td className={style.id}>3</td>
              <td className={style.province}>北京</td>
              <td className={style.count}>92</td>
            </tr>
            <tr>
              <td className={style.id}>4</td>
              <td className={style.province}>吉林</td>
              <td className={style.count}>90</td>
            </tr>
            <tr>
              <td className={style.id}>5</td>
              <td className={style.province}>浙江</td>
              <td className={style.count}>55</td>
            </tr>
            <tr>
              <td className={style.id}>6</td>
              <td className={style.province}>江苏</td>
              <td className={style.count}>47</td>
            </tr>
            <tr>
              <td className={style.id}>7</td>
              <td className={style.province}>湖北</td>
              <td className={style.count}>46</td>
            </tr>
            <tr>
              <td className={style.id}>8</td>
              <td className={style.province}>山东</td>
              <td className={style.count}>44</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}