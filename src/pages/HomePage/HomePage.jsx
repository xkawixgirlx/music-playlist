import './HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage({ user }) {
    return (
       <>
       <h2>Welcome! Click the button below!</h2>
       <Link to='/auth'>Enter! </Link>
       </> 
    )
}