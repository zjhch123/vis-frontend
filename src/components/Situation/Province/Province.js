import React from 'react';
import style from './Province.scss';

export default class Province extends React.Component {

  constructor(props) {
    super(props);
    this.option = {
      provinces: [
        {
          province: '福建',
          count: '288'
        },
        {
          province: '广东',
          count: '96'
        },
        {
          province: '北京',
          count: '92'
        },
        {
          province: '吉林',
          count: '90'
        },
        {
          province: '浙江',
          count: '55'
        },
        {
          province: '江苏',
          count: '47'
        },
        {
          province: '湖北',
          count: '46'
        },
        {
          province: '山东',
          count: '44'
        },
      ]
    }
  }

  handlerTRClick(province) {
    this.props.showProvince(province);
  }

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
            {
              this.option.provinces.map((data, index) => (
                <tr key={index} onClick={() => this.handlerTRClick(data.province)}>
                  <td className={style.id}>{index + 1}</td>
                  <td className={style.province}>{data.province}</td>
                  <td className={style.count}>{data.count}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}