/* global window,document */
import Config from '../Config/Config.js'
import React from 'react';
import MapGL from 'react-map-gl';
import DeckGLOverlay from './deckgl-overlay.js';

import $ from 'jquery';

const MAPBOX_TOKEN = "pk.eyJ1IjoiempoY2gxMjMiLCJhIjoiY2l1cDd4cWduMDAzMDJvbDhrY2Zta3NkNCJ9.3FmRDWqp0TXkgdDIWnM-vw"; // eslint-disable-line

export default class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        ...DeckGLOverlay.defaultViewport,
        width: 400,
        height: 500
      },
      data: null
    };
    this.requestAsync = null
  }

  request() {
    this.props.isLoading()
    this.requestAsync = $.ajax({
      url: `${Config.url}map/coordinateArr`,
      data: {
        q: this.props.condition.q
      },
      dataType: 'json',
      success: (response) => {
        let result = response.result[0]
        let data = []
        for(let i = 0; i < result.length; i += 3) {
          let lat = result[i]
          let lng = result[i + 1]
          data.push([Number(lng), Number(lat)])
        }  
        this.props.isOverLoading()
        this.setState({data});
      }
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize.bind(this));
    this._resize();
    this.request();
  }

  componentWillUnmount() {
    this.requestAsync.abort();
    this.props.isOverLoading()
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.condition.q === nextProps.condition.q) {
      return
    } else {
      this.props.condition.q = nextProps.condition.q
      this.request()
    }
  }

  _resize() {
    this._onViewportChange({
      width: document.documentElement.offsetWidth,
      height: window.innerHeight - 198
    });
  }

  _onViewportChange(viewport) {
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    });
  }

  render() {
    const {viewport, data} = this.state;

    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this._onViewportChange.bind(this)}
        mapboxApiAccessToken={MAPBOX_TOKEN}>
        <DeckGLOverlay
          viewport={viewport}
          data={data || []}
        />
      </MapGL>
    );
  }
}

