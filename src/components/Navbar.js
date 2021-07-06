import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>Book Recommendation</Link>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/search' className='nav-links'>Search</Link>
            </li>
            <li className='nav-item'>
              <Link to='/userProfile' className='nav-links'>User Page</Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-links'>Log In</Link>
            </li>
          </ul>
        </div>
      </nav>
      </>
    );
  }
}

export default Navbar;
