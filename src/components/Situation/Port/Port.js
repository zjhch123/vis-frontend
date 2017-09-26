import React from 'react';
import style from './Port.scss';
import ReactEcharts from 'echarts-for-react';

export default class System extends React.Component {
  constructor(props) {
    super(props);
    this.option = {
        tooltip : {
            trigger: 'axis'
        },
        grid: {
          top: '8%',
          left: '2%',
          right: '2%',
          bottom: '5%',
          containLabel: true
        },
        xAxis : {
          type : 'category',
          data : ['443', '502', '80', '21', '161', '102', '8000'],
          axisLine: {lineStyle: {color: 'white'}},
          axisLabel: {color: 'white'}
        },
        yAxis : {
          type : 'value',
          axisLine: {lineStyle: {color: 'white'}},
          axisLabel: {color: 'white'}
        },
        series : [
            {
                name:'设备数',
                type:'bar',
                data:[80, 74, 55, 691, 261, 26, 16]
            }
        ]
    };
  }
  render() {
    return (
      <div className={style.cPort}>
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