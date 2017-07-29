import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './saga'

const reducer = require('./reducer').default

const sagaMiddleware = createSagaMiddleware()

export const initStore = (initialState = {}) => {
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export function withReduxSaga(BaseComponent) {
  return withRedux(initStore)(nextReduxSaga(BaseComponent))
}
