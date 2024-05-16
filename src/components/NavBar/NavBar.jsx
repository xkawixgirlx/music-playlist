import { Link } from 'react-router-dom';
import './NavBar.css';
import * as userService from '../../utilities/users-service';

export default function NavBar({ setUser, user }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
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
    <div>
      <div>
        <button class='nav-btn' onClick={openNav}>NavBar</button>
      </div>
      <nav className='main' id='main'>
      </nav>
      <div id="nav" className="sidenav">
        <Link to="#" className="closebtn" onClick={closeNav}>&times;</Link>
        <Link to='/'>Home Page</Link>
        {user ?
        <>
        <Link to='/playlists'>My Playlists</Link>
        <Link to='/videos'>All Videos</Link>
        </>
          : 'hidden'
        }
        <br />
        {user ?
          <Link to="" onClick={handleLogOut}>Log Out</Link>
          :
          <Link to='/auth'>Login/Signup</Link>
        }
      </div>
    </div>
  );
}