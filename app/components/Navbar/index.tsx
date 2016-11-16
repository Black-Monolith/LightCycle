import * as React from 'react'
import { Link } from 'react-router'
import * as style from './style.scss'

export default () => (
  <nav className={style['navbar']}>
    <ul>
      <li>
        <Link to={'/'}> Home </Link>
      </li>
      <li>
        <Link to={'/counter'}> Counter </Link>
      </li>
      <li>
        <Link to={'/help'}> Help </Link>
      </li>
    </ul>
  </nav>
)
