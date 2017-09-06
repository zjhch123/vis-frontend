import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import Main from './containers/Main/Main';
import Search from './containers/Search/Search'
import Host from './containers/Host/Host'

const routes = ({history}) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/index" component={Main} />
      <Route path="/search/" exact component={Search}/>
      <Route path="/search/host" component={Host}/>
    </Switch>
  </ConnectedRouter>
)

export default routes