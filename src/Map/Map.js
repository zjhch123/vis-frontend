/* global window,document */
import React from 'react';
import MapGL from 'react-map-gl';
import DeckGLOverlay from './deckgl-overlay.js';

import {request} from 'd3-request';

// Set your mapbox token here
const MAPBOX_TOKEN = "pk.eyJ1IjoiempoY2gxMjMiLCJhIjoiY2l1cDd4cWduMDAzMDJvbDhrY2Zta3NkNCJ9.3FmRDWqp0TXkgdDIWnM-vw"; // eslint-disable-line

export default class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        ...DeckGLOverlay.defaultViewport,
        width: 500,
        height: 500
      },
      data: null
    };
    this.request = null
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize.bind(this));
    this._resize();
    // this.request = request("http://139.129.132.196:4399/map/coordinateArr?q=port%3A502")
    this.request = request(require("./data/heartmap-data.json"))
      .mimeType("application/json")
      .get((error, response) => {
        if (!error) {
          let responseJSON = JSON.parse(response.responseText)
          let result = responseJSON.result[0]
          let data = []
          for(let i = 0; i < result.length; i += 3) {
            let lat = result[i]
            let lng = result[i + 1]
            data.push([Number(lng), Number(lat)])
          }  
          this.setState({data});
        }
      });
  }

  componentWillUnmount() {
    this.request.abort();
  }

  _resize() {
    this._onViewportChange({
      width: window.innerWidth,
      height: window.innerHeight
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

