import React from 'react';
import style from './Follow.scss';
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    var base = +new Date(2016, 10, 27);
    var oneDay = 24 * 3600 * 1000;
    var onlineData = {
      date: [],
      ics: [1340],
      camera: [20]
    }
    var offlineData = {
      date: [],
      ics: [100],
      camera: [8]
    }
    for (var i = 1; i < 300; i++) {
        var now = new Date(base += oneDay);
        onlineData.date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        onlineData.ics.push(Math.round((Math.random() - 0.5) * 100 + onlineData.ics[i - 1]));
        onlineData.camera.push(Math.round((Math.random() - 0.45) * 10 + onlineData.camera[i - 1]));
        offlineData.date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        offlineData.ics.push(Math.round((Math.random() - 0.5) * 10 + offlineData.ics[i - 1]));
        offlineData.camera.push(Math.round((Math.random() - 0.45) * 4 + offlineData.camera[i - 1]));
    }
    this.baseOption = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '60%'];
            }
        },
        grid: {
            left: '1%',
            right: '1%',
            bottom: '6%',
            top: '6%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: onlineData.date,
            axisLine: {lineStyle: {color: 'white'}},
            axisLabel: {color: 'white'}
        },
        yAxis: [
          {
            type: 'value',
            boundaryGap: [0, '20%'],
            min: function(value) {
                return value.min - 300 > 0 ? value.min - 300 : 0;
            },
            axisLine: {lineStyle: {color: 'white'}},
            axisLabel: {
              color: 'white'
            },
            splitLine: {show: false}
          },
          {
            type: 'value',
            boundaryGap: [0, '20%'],
            splitNumber: 5,
            min: function(value) {
                return value.min - 30 > 0 ? value.min - 30 : 0;
            },
            axisLine: {lineStyle: {color: 'white'}},
            axisLabel: {
              color: 'white'
            },
            splitLine: {show: false}
          }
        ],
        series: [
            {
                name:'工控设备数据量(模拟数据)',
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                }
            },
            {
              name:'摄像头数据量(模拟数据)',
              type:'line',
              smooth:true,
              symbol: 'none',
              sampling: 'average',
              yAxisIndex: 1,
              itemStyle: {
                  normal: {
                      color: '#0099CC'
                  }
              },
              areaStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: '#3366CC'
                      }, {
                          offset: 1,
                          color: '#0099CC'
                      }])
                  }
              }
          }
        ]
    };
    this.optionOnline = JSON.parse(JSON.stringify(this.baseOption));
    this.optionOffline = JSON.parse(JSON.stringify(this.baseOption));
    this.optionOnline.series[0].data = onlineData.ics;
    this.optionOnline.series[1].data = onlineData.camera;
    this.optionOffline.series[0].data = offlineData.ics;
    this.optionOffline.series[1].data = offlineData.camera;
  }
  render() {
    return (
      <div className={style.cFollow}>
        <div className={style.gLeft}>
          <p className={style.uTitle}>线上扫描</p>
          <ReactEcharts 
            style={{}}
            option={this.optionOnline} 
            notMerge={true} 
            lazyUpdate={true} 
            className={style.cCharts}/>
        </div>
        <div className={style.gRight}>
          <p className={style.uTitle}>线下核查</p>
          <ReactEcharts 
            style={{}}
            option={this.optionOffline} 
            notMerge={true} 
            lazyUpdate={true} 
            className={style.cCharts}/>
        </div>
      </div>
    )
  }
}