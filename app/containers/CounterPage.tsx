import * as React from 'react'
import { connect } from 'react-redux'

import Counter from '../components/Counter/Counter'
import Button from '../components/Counter/Button'
import * as counterActions from '../actions/counter'

import { State } from '../reducers'

type Props = {
  counter: number,
  increment: () => void,
  decrement: () => void,
  incrementAsync: () => void
}

const CounterPage =
  (props: Props) =>
    <div>
      <Counter
        counter={props.counter} />
      <div>
        <Button
          action={props.increment}
          text={'Increment'} />
        <Button
          action={props.decrement}
          text={'Decrement'} />
        <Button
          action={props.incrementAsync}
          text={'IncrementAsync'} />
      </div>
    </div>

const mapStateToProps = (state: State) => (
  {
    counter: state.counter.value
  }
)

const mapDispatchToProps = dispatch => (
  {
    increment: () => dispatch(counterActions.increment),
    decrement: () => dispatch(counterActions.decrement),
    incrementAsync: () => dispatch(counterActions.incrementAsync)
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage)
