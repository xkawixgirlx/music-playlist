import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ setUser }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogOut() {
    userService.logOut();
    setUser(null);
    setIsLoggedIn(isLoggedIn);
  }

  return (
    <nav>
      <Link to='/playlist'>Playlist</Link> 
      &nbsp;&nbsp;
      {isLoggedIn ? (
        <Link to='/auth'>Login/Signup</Link>
      ) : (
        <Link to="" onClick={handleLogOut}>Log Out</Link>
      )}
    </nav>
  );
}