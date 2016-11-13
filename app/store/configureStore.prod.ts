import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as createLogger from 'redux-logger'
import rootReducer, { State } from '../reducers'

const loggerMiddleware = createLogger()
const enhancer = applyMiddleware(thunkMiddleware, loggerMiddleware)

export = (initialState?: State) => {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers') as typeof rootReducer)
    )
  }
  return store
}
