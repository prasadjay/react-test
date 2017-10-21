import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App.js';
import Appd from './Applet.jsx';
import registerServiceWorker from './registerServiceWorker';
//import SignUpDialog from './Composition.js';

ReactDOM.render(<Appd />, document.getElementById('root'));
registerServiceWorker();
