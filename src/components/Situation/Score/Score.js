import React from 'react';
import style from './Score.scss';
import Echarts from 'echarts';

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.option = {
      tooltip: {},
      radar: {
          name: {
              textStyle: {
                  color: '#fff'
            }
          },
          indicator: [
            { name: '漏洞安全', max: 100},
            { name: '联网情况', max: 100},
            { name: '防火墙部署', max: 100},
            { name: '安全常识', max: 100},
            { name: '系统架构', max: 100},
          ]
      },
      series: [{
          type: 'radar',
          data : [
              {
                  value : [80, 75, 50, 80, 70]
              },
          ],
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          lineStyle: {
            normal: {
              width: 5
            }
          }
      }]
    };
  }
  renderCharts() {
    const charts = Echarts.init(this.refs.charts);
    charts.setOption(this.option);
  }
  render() {
    return (
      <div className={style.cScore}>
        <p className={style.uScore}>整体评分: 75分</p>
        <p className={style.uRank}>危害等级: 中等</p>
        <div ref="charts"
          className={style.cCharts}/>
      </div>
    )
  }
}