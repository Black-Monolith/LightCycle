import { Store } from 'redux'

import { State } from 'reducers'

type ConfigureStore = (initialState?: State) => Store<State>

let configureStore: ConfigureStore

if (process.env.NODE_ENV === 'production') {
  configureStore = require<ConfigureStore>('./configureStore.prod')
} else {
  configureStore = require<ConfigureStore>('./configureStore.dev')
}

export default configureStore
