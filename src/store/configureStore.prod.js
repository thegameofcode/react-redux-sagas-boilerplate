import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSagas from '../sagas/index';

const finalCreateStore = compose(
  applyMiddleware(createSagaMiddleware(rootSagas))
)(createStore);

module.exports = function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
};
