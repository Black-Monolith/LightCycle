import * as React from 'react'
import { Link } from 'react-router'

import * as styles from './Navbar.scss'

const Navbar = () => (
  <nav className={styles['navbar']}>
    <ul>
      <li>
        <Link to={'/'}> Home </Link>
      </li>
      <li>
        <Link to={'/counter'}> Counter </Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
