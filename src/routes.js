import React from 'react'
import { Router, Route, Switch } from 'react-router'
import Main from './containers/Main'
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Main} />
      <Route path="/index" component={Main} />
    </Switch>
  </Router>
)

export default routes