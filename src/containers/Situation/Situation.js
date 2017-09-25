import React from 'react';
import Block from '../../components/Situation/Block/Block';
import ChinaMap from '../../components/Situation/ChinaMap/Map';
import Total from '../../components/Situation/Total/Total';
import Score from '../../components/Situation/Score/Score';
import System from '../../components/Situation/System/System';
import style from './style.scss';

export default class Situation extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    setTimeout(function() {
      this.refs.bmap.getBoundary('浙江');
    }.bind(this), 5000);
  }

  render() {
    return (
      <div className={style.cSituation} style={{height: (document.documentElement.clientHeight > 700 ? document.documentElement.clientHeight : 700) + 'px'}}>
        <Block.Column className={style.gLeft}>
          <Block className={style.mBlock}>
            <Block.Title>总数、分布</Block.Title>
            <Total />
          </Block>
          <Block className={style.mBlock}>
            <Block.Title>实时安全评分</Block.Title>
            <Score />
          </Block>
          <Block className={style.mBlock}>
            <Block.Title>系统运行情况</Block.Title>
            <System />
          </Block>
        </Block.Column>
        <Block.Column className={style.gCenter}>
          <Block className={style.mMap}>
            <Block.Title className={style.uTitle}>态势地图</Block.Title>
            <Block.Container className={style.uMap}>
              <ChinaMap ref="bmap"/>
            </Block.Container>
          </Block>
          <Block className={style.mFollow}>
            <Block.Title>态势跟踪</Block.Title>
          </Block>
          <Block className={style.mSituation}>
            <Block.Title>应急响应中心</Block.Title>
          </Block>
        </Block.Column>
        <Block.Column className={style.gRight}>
          <Block className={style.mBlock}>
            <Block.Title>行政区块</Block.Title>
          </Block>
          <Block className={style.mBlock}>
            <Block.Title>端口分布</Block.Title>
          </Block>
          <Block className={style.mBlock}>
            <Block.Title>鉴势雷达</Block.Title>
          </Block>
          <Block className={style.mBlock}>
            <Block.Title>主机跟踪</Block.Title>
          </Block>
        </Block.Column>
      </div>
    )
  }
}