import { fromJS } from 'immutable'

const INITIAL_STATE = fromJS({
  value: 0
})

export default function (state = INITIAL_STATE, actions: any) {
  switch (actions.type) {
    case 'INCREMENT':
      return increment(state)
    case 'DECREMENT':
      return decrement(state)
    default:
      return state
  }
}

const increment = (state: any) =>
  state.update('value', (value: number) => value + 1)

const decrement = (state: any) =>
  state.update('value', (value: number) => value - 1)
