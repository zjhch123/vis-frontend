import {SVGOverlay} from 'react-map-gl'
import React from 'react';
import r from 'r-dom';
import assign from 'object-assign';

export default class PointOverlay extends React.Component {

  static propTypes = {
    locations: React.PropTypes.array.isRequired,
  }

  render() {
    return r(SVGOverlay, assign({}, this.props, {
      redraw: function redraw(opt) {
        return r.g(this.props.locations.map(function map(location) {
          var pixel = opt.project([location.longitude, location.latitude]);
          return r.circle({
            cx: pixel[0],
            cy: pixel[1],
            r: 10,
            style: {
              fill: 'rgb(231, 76, 60)',
              pointerEvents: 'all',
              cursor: 'pointer'
            }
          });
        }));
      }.bind(this)
    }))
  }
}