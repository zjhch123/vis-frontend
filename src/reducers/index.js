import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import query from './query';
import search from './search';
import group from './group';

export default combineReducers({
  query,
  router: routerReducer,
  search,
  group
});