import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import * as userService from '../../utilities/users-service';

export default function NavBar({ setUser }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
    setIsLoggedIn(false);
  }

  function openNav() {
    document.getElementById('nav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }

  function closeNav() {
    document.getElementById('nav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }

  return (
    <>
      <div>
        <button onClick={openNav}>NavBar</button>
      </div>
      <nav className='main' id='main'>
      </nav>
      <div id="nav" className="sidenav">
        <Link to="#" className="closebtn" onClick={closeNav}>&times;</Link>
        <Link to='/playlists'>Playlist</Link>            
        <br />
        {isLoggedIn ? (
          <Link to='/auth'>Login/Signup</Link>
        ) : (
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        )}
      </div>
    </>
  );
}