import { ThunkAction } from 'redux'
import { State } from '../reducers'

export const increment = {
  type: 'INCREMENT'
}

export const decrement = {
  type: 'DECREMENT'
}

export const incrementAsync: ThunkAction<void, State, any> =
  dispatch =>
    setTimeout(() =>
      dispatch(increment),
      1000
    )
