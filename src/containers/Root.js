import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import Routes from '../routes'
import DevTools from './DevTools'
const Root = ({ store, history }) => (
  <Provider store={store}>
    <div id="app">
      <Routes history={history}/>
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root