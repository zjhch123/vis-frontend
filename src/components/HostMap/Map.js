import MapGL from 'react-map-gl';
import PointOverlay from './point-overlay.js';
import React from 'react';

const MAPBOX_TOKEN = "pk.eyJ1IjoiempoY2gxMjMiLCJhIjoiY2l1cDd4cWduMDAzMDJvbDhrY2Zta3NkNCJ9.3FmRDWqp0TXkgdDIWnM-vw"; // eslint-disable-line

export default class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 500,
        height: 250,
        zoom: 7,
        minZoom: 2.5,
        maxZoom: 15,
        bearing: 0,
        longitude: props.location.longitude,
        latitude: props.location.latitude,
      }
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize.bind(this));
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize.bind(this));
  }

  _resize() {
    this._onViewportChange({
      width: document.documentElement.clientWidth,
      height: 250
    });
  }

  _onViewportChange(viewport) {
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    });
  }

  render() {
    return (
      <MapGL
            {...this.state.viewport}
            onViewportChange={this._onViewportChange.bind(this)}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/dark-v9"
        >
        <PointOverlay {...this.state.viewport} locations={[this.props.location]} />
      </MapGL>
    )
  }
}