import * as React from 'react'
import { connect, Dispatch } from 'react-redux'

import Counter from '../components/Counter'
import * as counterActions from '../actions/counter'

import { State } from '../reducers'

const mapStateToProps = (state: State) => (
  {
    counter: state.counter.value
  }
)

const mapDispatchToProps = (dispatch: Dispatch<State>) => (
  {
    increment: () => dispatch(counterActions.increment),
    decrement: () => dispatch(counterActions.decrement),
    incrementAsync: () => dispatch(counterActions.incrementAsync)
  }
)

const CounterPage =
  connect(mapStateToProps, mapDispatchToProps)(props =>
    <div>
      <Counter
        counter={props.counter} />
      <div>
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
    </div>
  )

export default CounterPage
