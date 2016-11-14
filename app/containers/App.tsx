import * as React from 'react'
import { Provider, Store } from 'react-redux'
import { ReactRouterReduxHistory } from 'react-router-redux'
import { Router } from 'react-router'

import { State } from 'reducers'
import routes from 'containers/routes'
import DevTools from 'containers/DevTools'

import * as style from 'index.scss'
import * as logo from 'images/logo.svg'

type Props = {
  history: ReactRouterReduxHistory,
  store: Store<State>
}

export default class App extends React.Component<Props, void> {
  render() {
    return (
      <div className={style['app']}>
        <div className={style['logo']}>
          <img src={logo} />
        </div>
        <Provider store={this.props.store}>
          <div>
            <Router history={this.props.history} routes={routes} />
            <DevTools />
          </div>
        </Provider>
      </div>
    )
  }
}
