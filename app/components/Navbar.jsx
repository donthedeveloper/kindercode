import React from 'react';

let Navbar = (props) => {
  return (
    <nav className="navbar">
      <img id="logo" src="/img/logo.png" />
      <img className="nav-name" src="/img/kinderCode.png" />
      <button>Login</button>
    </nav>
  )
}

export default Navbar;
