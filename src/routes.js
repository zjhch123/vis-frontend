import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import asyncComonent from './containers/AsyncComponent';
import Main from './containers/Main/Main';
import Search from './containers/Search/Search';
import Find from './containers/Find/Find';
import Help from './containers/Help/Help';
import About from './containers/About/About';
import NoMatch from './containers/NoMatch/NoMatch';
import Module from './containers/Module/Module';

const AsyncSituation = asyncComonent(() => import('./containers/Situation/Situation'));

const routes = ({history}) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/index" component={Main} />
      <Route path="/search" component={Search} />
      <Route path="/find" component={Find} />
      <Route path="/help" component={Help} />
      <Route path="/about" component={About} />
      <Route path="/situation" component={AsyncSituation} />
      <Route path="/module" component={Module} />
      <Route component={NoMatch}/>
    </Switch>
  </ConnectedRouter>
)

export default routes