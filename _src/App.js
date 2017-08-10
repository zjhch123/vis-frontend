import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Index from './Index/Index.js';
import Result from './Result/Result.js';
import Host from './Host/Host.js';
import Help from './Help/Help.js';
import About from './About/About.js';
import NoMatch from './404/NoMatch';

// 这里是整个APP的路由的配置
const App = () => (
  <Router>
    <div className="g-container">
      <Switch>
      <Route exact path="/" component={Index}/>
      <Route path="/index" component={Index}/>
      <Route path="/result" component={Result}/>
      <Route path="/host" component={Host}/>
      <Route path="/help" component={Help}/>
      <Route path="/about" component={About}/>
      <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>
)

export default App;