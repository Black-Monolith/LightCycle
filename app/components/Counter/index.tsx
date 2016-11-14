import * as React from 'react'
import * as style from './Counter.scss'

type Props = {
  counter: number
}

export default (props: Props) => (
  <div>
    <h1>Counter.</h1>
    <p className={style['counter']}>
      {props.counter}
    </p>
  </div>
)
