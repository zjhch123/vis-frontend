import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

var a = function() {
  var r = document.getElementById('root');
  var ch = document.documentElement.clientHeight;
  r.style.height = ch + "px";
}
a();
setInterval(a, 300);
registerServiceWorker();
