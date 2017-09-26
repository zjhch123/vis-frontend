import React from 'react';
import style from './Host.scss';

export default class Host extends React.Component {
  render() {
    return (
      <div className={style.cHost}>
        <table className={style.mTable}>
          <thead className={style.uThead}>
            <tr>
              <th className={style.id}>#</th>
              <th className={style.ip}>IP</th>
              <th className={style.province}>省份</th>
              <th className={style.time}>采集时间</th>
              <th className={style.type}>采集方式</th>
            </tr>
          </thead>
          <tbody className={style.uTbody}>
            <tr>
              <td className={style.id}>1</td>
              <td className={style.ip}>222.80.100.216</td>
              <td className={style.province}>福州</td>
              <td className={style.time}>2017/09/21</td>
              <td className={style.type}>扫描器</td>
            </tr>
            <tr>
              <td className={style.id}>2</td>
              <td className={style.ip}>61.177.54.155</td>
              <td className={style.province}>上海</td>
              <td className={style.time}>2017/09/21</td>
              <td className={style.type}>扫描器</td>
            </tr>
            <tr>
              <td className={style.id}>3</td>
              <td className={style.ip}>183.193.0.18</td>
              <td className={style.province}>福州</td>
              <td className={style.time}>2017/09/21</td>
              <td className={style.type}>扫描器</td>
            </tr>
            <tr>
              <td className={style.id}>4</td>
              <td className={style.ip}>218.3.99.57</td>
              <td className={style.province}>广州</td>
              <td className={style.time}>2017/09/20</td>
              <td className={style.type}>线下</td>
            </tr>
            <tr>
              <td className={style.id}>5</td>
              <td className={style.ip}>117.26.97.246</td>
              <td className={style.province}>福州</td>
              <td className={style.time}>2017/09/19</td>
              <td className={style.type}>线下</td>
            </tr>
            <tr>
              <td className={style.id}>6</td>
              <td className={style.ip}>101.81.228.230</td>
              <td className={style.province}>杭州</td>
              <td className={style.time}>2017/09/16</td>
              <td className={style.type}>扫描器</td>
            </tr>
            <tr>
              <td className={style.id}>7</td>
              <td className={style.ip}>119.32.151.2</td>
              <td className={style.province}>南京</td>
              <td className={style.time}>2017/09/16</td>
              <td className={style.type}>扫描器</td>
            </tr>
            <tr>
              <td className={style.id}>8</td>
              <td className={style.ip}>113.90.122.39</td>
              <td className={style.province}>武汉</td>
              <td className={style.time}>2017/09/16</td>
              <td className={style.type}>线下</td>
            </tr>
            <tr>
              <td className={style.id}>9</td>
              <td className={style.ip}>61.131.13.225</td>
              <td className={style.province}>重庆</td>
              <td className={style.time}>2017/09/15</td>
              <td className={style.type}>扫描器</td>
            </tr>
            <tr>
              <td className={style.id}>10</td>
              <td className={style.ip}>183.238.141.153</td>
              <td className={style.province}>广州</td>
              <td className={style.time}>2017/09/15</td>
              <td className={style.type}>扫描器</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
