import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import registerServiceWorker from './misc/registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
