import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import query from './query';

export default combineReducers({
  query,
  router: routerReducer
});