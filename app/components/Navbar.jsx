import React from 'react';
import {Link} from 'react-router'
import Login from './Login'
import WhoAmI from './WhoAmI'

let Navbar = ({user}) => {
  return (
    <nav className="navbar">
      <img className="nav-logo" id="logo" src="/img/logo.png" />
      <img className="nav-name" src="/img/kinderCode.png" />
      {user ? (<WhoAmI /> ): (<Login />)}
    </nav>
  )
}

export default Navbar;
