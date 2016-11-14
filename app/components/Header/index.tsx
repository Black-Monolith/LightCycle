import * as React from 'react'
import * as style from './Header.scss'
import * as logo from 'images/logo.svg'

export default () => (
  <div className={style['header']}>
    <img src={logo} />
  </div>
)
