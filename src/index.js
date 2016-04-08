import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
/**
 * Import the stylesheet you want used! Here we just reference
 * the main SCSS file we have in the styles directory.
 */
import './styles/app.global.css';

import {Router, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {configureStore} from './store/configureStore';
import routes from './routes';


const store = configureStore({});
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			{ routes }
		</Router>
	</Provider>,
	document.getElementById('root')
);
