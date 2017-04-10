import { ComponentClass } from 'react'
import { Store } from 'react-redux'
import { History } from 'history'
import { State } from 'reducers'

export type Props = {
  store: Store<State>,
  history: History
}

type App = ComponentClass<Props>

export default
  process.env.NODE_ENV === 'production' ?
    require<App>('./App.prod') :
    require<App>('./App.dev')
