import { combineReducers } from 'redux'
import { routerReducer, RouterState } from 'react-router-redux'

import counterReducer, { CounterState } from 'reducers/counter'

export type State = {
  routing: RouterState,
  counter: CounterState
}

const rootReducer = combineReducers<State>({
  routing: routerReducer,
  counter: counterReducer
})

export default rootReducer
