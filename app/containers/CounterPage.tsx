import * as React from 'react'
import { connect, Dispatch } from 'react-redux'

import Counter from 'components/Counter'
import { State } from 'reducers'
import { increment, decrement, incrementAsync } from 'actions/counter'

const mapStateToProps = (state: State) => ({
  counter: state.counter.value
})

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
  increment: () => dispatch(increment),
  decrement: () => dispatch(decrement),
  incrementAsync: () => dispatch(incrementAsync)
})

export default
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
