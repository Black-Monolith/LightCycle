import * as React from 'react'
import { Link } from 'react-router'

const Navbar = () =>
  <nav>
    <ul>
      <li>
        <Link to={'/'}> Home </Link>
      </li>
      <li>
        <Link to={'/counter'}> Counter </Link>
      </li>
    </ul>
  </nav>

export default Navbar
