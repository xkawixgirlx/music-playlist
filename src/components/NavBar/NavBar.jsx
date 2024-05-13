import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to='/playlist'>Playlist</Link> 
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}