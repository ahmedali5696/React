import React from 'react';
import logo from '../images/logo.png'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo'/>
        <p>my travel journal.</p>
    </nav>
  );
}