import React from 'react';
import {connect} from 'react-redux';
import {MapAction} from '../../../actions';

import SearchMap from '../../../components/Map/SearchMap/Map';

class Map extends React.Component {
  
  render() {
    return (
      <div>
        <SearchMap data={this.props.mapResult} 
             size={4} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  location: state.router.location,
  mapResult: state.map
});

const mapDispatchToProps = (dispatch) => ({
  dispatchMap: function(condition) {
    dispatch(MapAction(condition));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);