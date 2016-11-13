import { Store } from 'redux'
import { State } from '../reducers'

type ConfigureStore = (initialState?: State) => Store<State>
type StoreModule = { default: ConfigureStore }

let configureStore: ConfigureStore

if (process.env.NODE_ENV === 'production') {
  configureStore = require<StoreModule>('./configureStore.prod').default
} else {
  configureStore = require<StoreModule>('./configureStore.dev').default
}

export default configureStore
