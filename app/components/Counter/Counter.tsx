import * as React from 'react'

type Props = {
  counter: number
}

const Counter = (props: Props) => (
  <div>
    <h1>Counter</h1>
    <p>{props.counter}</p>
  </div>
)

export default Counter
