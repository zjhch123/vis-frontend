import React from 'react';
import MapGL from 'react-map-gl';
import DeckGLOverlay from './deckgl-overlay.js';

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
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize.bind(this));
    this._resize();
    this.setState({
      data: this.props.data.result
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize.bind(this));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data.result
    });
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

