import React from 'react';
import style from './Trend.scss';
import ReactEcharts from 'echarts-for-react';

export default class Trend extends React.Component {
  constructor(props) {
    super(props);
    const data = {"subtext":"漏洞趋势分布（周）","dataWeek":["五周","四周","三周","二周","一周","本周"],"repairedNum":[261,277,225,175,174,20],"notRepairedNum":[52,53,82,89,105,4],"countNum":[313,330,307,264,279,24]};
    this.option = {
      tooltip : {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '0%'];
        }
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '5%',
        top: '16%',
        containLabel: true
      },
      calculable : true,
      legend: {
        x: 'right',
        y : 'top',
        data:['全部','已修复','未修复'],
        textStyle: {color: 'white'},
      },
      xAxis : [
        {
          type : 'category',
          data : data.dataWeek,
          axisLine: {lineStyle: {color: 'white'}},
          axisLabel: {color: 'white'}
        }
      ],
      yAxis : [
        {
          type : 'value',
          splitNumber: 3,        
          axisLabel : {
            formatter: '{value}',
            color: 'white'
          },
          axisLine: {lineStyle: {color: 'white'}}
        }
      ],
      series : [{
        name:'已修复',
        type:'bar',
        itemStyle:{
          normal:{
            label:{
              show:true
            },
            lineStyle:{
              width:5
            }
          }
        },
        data:data.repairedNum
      },{
        name:'未修复',
        type:'bar',
        itemStyle:{
          normal:{
            label:{
              show:true
            },
            lineStyle:{
              width:5
            }
          }
        },
        data:data.notRepairedNum
      },{
        name:'全部',
        type:'line',
        itemStyle:{
          normal:{
            label:{
              show:true
            },
            lineStyle:{
              width:3
            }
          }
        },
        data:data.countNum
      }]
    };
  }
  render() {
    return (
      <div className={style.cTrend}>
        <ReactEcharts 
          style={{}}
          option={this.option} 
          notMerge={true} 
          lazyUpdate={true} 
          className={style.cCharts}/>
      </div>
    )
  }
}