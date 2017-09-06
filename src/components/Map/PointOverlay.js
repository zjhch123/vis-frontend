import {SVGOverlay} from 'react-map-gl'
import React from 'react';
import PropTypes from 'prop-types';
import r from 'r-dom';
import assign from 'object-assign';

export default class PointOverlay extends React.Component {

  render() {
    const size = this.props.size;
    return r(SVGOverlay, assign({}, this.props, {
      redraw: function redraw(opt) {
        return r.g(this.props.locations.map(function map(location) {
          var pixel = opt.project([location.longitude, location.latitude]);
          return r.circle({
            cx: pixel[0],
            cy: pixel[1],
            r: size,
            style: {
              fill: '#00A9FF',
              pointerEvents: 'all',
              cursor: 'pointer'
            }
          });
        }));
      }.bind(this)
    }))
  }
}

PointOverlay.PropTypes = {
  locations: PropTypes.array.isRequired,
}


