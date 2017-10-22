import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import registerServiceWorker from './misc/registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(<BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
