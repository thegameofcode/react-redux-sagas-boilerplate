import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSagas from '../sagas/index';
import {hashHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux'

const router = routerMiddleware(hashHistory);

const finalCreateStore = compose(
  applyMiddleware(router, createSagaMiddleware(rootSagas))
)(createStore);

module.exports = function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
};
