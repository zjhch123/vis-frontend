import React from 'react';
import ChinaMap from '../../components/Situation/ChinaMap/Map';
// import style from './style.scss';

export default class Situation extends React.Component {

  componentDidMount() {
    setTimeout(function() {
      this.refs.bmap.getBoundary('浙江');
    }.bind(this), 5000);
  }

  render() {
    return (
      <div>
        <ChinaMap width='800px' height='500px' ref="bmap" />
      </div>
    )
  }
}