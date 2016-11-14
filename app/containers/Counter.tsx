import { connect, Dispatch } from 'react-redux'
import { State } from 'reducers'
import { CounterState } from 'reducers/counter'
import { increment, decrement, incrementAsync } from 'actions/counter'
import Counter from 'components/Counter'

type MappedState = CounterState

const mapStateToProps =
  (state: State): MappedState => state.counter

interface MappedDispatch {
  increment: () => any,
  decrement: () => any,
  incrementAsync: () => any
}

const mapDispatchToProps =
  (dispatch: Dispatch<State>): MappedDispatch => ({
    increment: () => dispatch(increment),
    decrement: () => dispatch(decrement),
    incrementAsync: () => dispatch(incrementAsync)
  })

export type MappedProps = MappedState & MappedDispatch
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
