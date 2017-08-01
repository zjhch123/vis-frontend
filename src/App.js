import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Index from './Index/Index.js';
import Result from './Result/Result.js';
import Host from './Host/Host.js';
import Help from './Help/Help.js';
import About from './About/About.js';


console.log(new Date());

// 这里是整个APP的路由的配置
const App = () => (
  <Router>
    <div className="g-container">
      <Route exact path="/" component={Index}/>
      <Route path="/index" component={Index}/>
      <Route path="/result" component={Result}/>
      <Route path="/host" component={Host}/>
      <Route path="/help" component={Help}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

export default App;