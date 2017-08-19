import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducers from '../reducers';
import DevTools from '../containers/DevTools';

const store = () => createStore(
  reducers,
  compose(
    applyMiddleware(thunk, createLogger()),
    DevTools.instrument()
  )
);

export default store;