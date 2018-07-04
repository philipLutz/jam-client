import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './components/app';
// import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider>
		<App />
	</Provider>,
	document.getElementById('root'));

registerServiceWorker();
