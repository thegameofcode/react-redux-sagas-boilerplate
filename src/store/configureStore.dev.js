import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import DevTools from '../containers/DevTools';
import rootSagas from '../sagas/index';
import {hashHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux'

const logger = createLogger();

const router = routerMiddleware(hashHistory);

const enhancer = compose(
	applyMiddleware(router, createSagaMiddleware(rootSagas)),
	DevTools.instrument()
);

module.exports = function configureStore(initialState) {
	const store = createStore(rootReducer, initialState, enhancer);

	if (module.hot) {
		module.hot.accept('../reducers', () =>
			store.replaceReducer(require('../reducers'))
		);
	}

	return store;
};
