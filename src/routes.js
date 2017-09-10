import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import Main from './containers/Main/Main';
import Search from './containers/Search/Search';
import Help from './containers/Help/Help';
import NoMatch from './containers/NoMatch/NoMatch';

const routes = ({history}) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/index" component={Main} />
      <Route path="/search" component={Search} />
      <Route path="/help" component={Help} />
      <Route component={NoMatch}/>
    </Switch>
  </ConnectedRouter>
)

export default routes