import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
        <img className='logo' src={logo} alt='coctail db logo'></img>
        </Link>
        <ul className='nav-links'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
