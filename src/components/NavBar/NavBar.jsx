import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import * as userService from '../../utilities/users-service';

export default function NavBar({ setUser }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
    setIsLoggedIn(isLoggedIn);
  }

  function openNav() {
    document.getElementById('nav').classList.add('open');
    document.body.classList.add('nav-open');
  }

  function closeNav() {
    document.getElementById('nav').classList.remove('open');
    document.body.classList.remove('nav-open');
  }

  return (
    <>
      <nav className='main' id='nav'>
        <button onClick={openNav}>Nav</button>
        <Link to='/playlist'>Playlist</Link>
        <br />
        {isLoggedIn ? (
          <Link to='/auth'>Login/Signup</Link>
        ) : (
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        )}
        <div id="nav" className="sidenav">
          <Link to="#" className="closebtn" onClick={closeNav}>&times;</Link>
        </div>
      </nav>
    </>
  );
}