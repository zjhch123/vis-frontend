import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import Routes from '../routes'
import DevTools from './DevTools'
//<DevTools />
const Root = ({ store }) => (
  <Provider store={store}>
    <div id="app">
      <Routes />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root