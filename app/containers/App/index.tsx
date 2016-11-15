import { ComponentClass } from 'react'
import { Store } from 'react-redux'
import { ReactRouterReduxHistory } from 'react-router-redux'
import { State } from 'reducers'

export type Props = {
  store: Store<State>,
  history: ReactRouterReduxHistory
}

type App = ComponentClass<Props>

export default
  process.env.NODE_ENV === 'production' ?
    require<App>('./App.prod') :
    require<App>('./App.dev')
