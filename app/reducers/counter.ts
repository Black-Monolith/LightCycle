import { set } from 'monolite'
import { Action, Reducer } from 'redux'

export type CounterState = {
  value: number
}

const INITIAL_STATE: CounterState = {
  value: 0
}

const increment = (state: CounterState) =>
  set(state, _ => _.value)(value => value + 1)

const decrement = (state: CounterState) =>
  set(state, _ => _.value)(value => value - 1)

const counterReducer: Reducer<CounterState> =
  (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
      case 'INCREMENT':
        return increment(state)
      case 'DECREMENT':
        return decrement(state)
      default:
        return state
    }
  }

export default counterReducer
