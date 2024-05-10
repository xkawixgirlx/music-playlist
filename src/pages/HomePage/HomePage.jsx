import './HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage({ user }) {
    return (
       <>
       <h2>Welcome! Click the button below!</h2>
       <img src='https://cdn.pixabay.com/photo/2022/06/21/21/15/audio-7276511_1280.jpg' />
       <br />
       <Link to='/auth'>Enter! </Link>
       </> 
    )
}