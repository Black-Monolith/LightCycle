import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import counterReducer, { CounterState } from './counter'

export type State = {
  routing: any,
  counter: CounterState
}

const rootReducer = combineReducers<State>({
  routing: routerReducer,
  counter: counterReducer
})

export default rootReducer
