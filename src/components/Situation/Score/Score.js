import React from 'react';
import Echarts from 'echarts';
import style from './Score.scss';

export default class Score extends React.Component {
  componentDidMount() {
    const option = {
        tooltip: {},
        radar: {
            // shape: 'circle',
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
            lineStyle: {
              normal: {
                width: 5
              }
            }
        }]
    };
    const charts = Echarts.init(this.refs['score-charts']);
    charts.setOption(option);
  }
  render() {
    return (
      <div className={style.cScore}>
        <p className={style.uScore}>整体评分: 75分</p>
        <div className={style.cCharts} ref="score-charts"></div>
      </div>
    )
  }
}