import * as React from 'react'
import * as style from './style.scss'
import { MappedProps } from 'containers/Counter'

export default (props: MappedProps) => (
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
