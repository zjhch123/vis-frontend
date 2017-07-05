import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Index from './Index/Index.js';
import Result from './Result/Result.js';


// 这里是整个APP的路由的配置
const App = () => (
  <Router>
    <div style={{height: "100%"}}>
      <Route exact path="/" component={Index}/>
      <Route path="/result" component={Result}/>
    </div>
  </Router>
)

export default App;