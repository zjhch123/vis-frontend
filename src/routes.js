import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Main from './containers/Main';
import createHistory from 'history/createBrowserHistory';

const routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/index" component={Main} />
    </Switch>
  </Router>
)

export default routes