import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import WeatherPage from './containers/WeatherPage';

export default (
	<Route path="/" component={ App }>
		<IndexRoute component={ HomePage } />
		<Route path="/weather" component={ WeatherPage } />
	</Route>
);
