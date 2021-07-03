import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { reducer } from './redux/reducers'
import rootSaga from './redux/sagas'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)