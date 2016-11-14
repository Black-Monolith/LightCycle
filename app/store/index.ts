import { Store } from 'redux'
import { State } from 'reducers'

type ConfigureStore = (initialState?: State) => Store<State>

export default
  process.env.NODE_ENV === 'production' ?
    require<ConfigureStore>('./configureStore.prod') :
    require<ConfigureStore>('./configureStore.dev')
