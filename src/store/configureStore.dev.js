import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import DevTools from '../components/DevTools'
import rootSagas from '../sagas/index'
import {hashHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'

const router = routerMiddleware(hashHistory)
const sagaMiddleware = createSagaMiddleware()

const enhancer = compose(
  applyMiddleware(router, sagaMiddleware),
  DevTools.instrument()
)

module.exports = function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers'))
    )
  }

  sagaMiddleware.run(rootSagas)

  return store
}
