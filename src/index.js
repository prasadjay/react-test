import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Applet.jsx';
import registerServiceWorker from './misc/registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
