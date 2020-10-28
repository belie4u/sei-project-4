import React from 'react'
import { Link } from 'react-router-dom'

import { logout } from '../../lib/auth'

const Navbar = () => {


  const handleLogOut = () => {
    // show a message to user to say goodbye or whatever
    logout()
  }

  return (
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            <img id="logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="formula1" width="160" height="50" />
          </a>
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/movies/new" className="navbar-item">Add A Movie</Link>
          <Link to="/register" className="navbar-item">Register</Link>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="navbar-item">Login</Link>
          <Link to="/" onClick={handleLogOut} className="navbar-item">Logout</Link>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar

