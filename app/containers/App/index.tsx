import { Component } from 'react'
import { Store } from 'react-redux'
import { ReactRouterReduxHistory } from 'react-router-redux'
import { State } from 'reducers'

export type Props = {
  store: Store<State>,
  history: ReactRouterReduxHistory
}

interface App extends Component<Props, void> {}

export default
  process.env.NODE_ENV === 'production' ?
    require<App>('./App.prod') :
    require<App>('./App.dev')
