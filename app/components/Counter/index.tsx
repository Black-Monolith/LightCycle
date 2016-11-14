import * as React from 'react'
import * as style from './Counter.scss'
import { CounterState } from 'reducers/counter'

export type MappedState = CounterState

export type MappedDispatch = {
  increment: React.EventHandler<any>,
  decrement: React.EventHandler<any>,
  incrementAsync: React.EventHandler<any>
}

type Props = CounterState & MappedDispatch

export default (props: Props) => (
  <div>
    <h1>Counter.</h1>
    <p className={style['counter']}>
      {props.value}
    </p>
    <button onClick={props.increment}>
      Increment
    </button>
    <button onClick={props.decrement}>
      Decrement
    </button>
    <button onClick={props.incrementAsync}>
      IncrementAsync
    </button>
  </div>
)
