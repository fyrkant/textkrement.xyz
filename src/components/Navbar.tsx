import * as React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
  <nav className='navbar'>
    <div className='container'>
      <div className='navbar-start'>
        <Link to='/' className='navbar-item'>
         ✍💩 textkrement.xyz
        </Link>
      </div>
      <div className='navbar-end'>
        <Link className='navbar-item' to='/about'>
          ?
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
