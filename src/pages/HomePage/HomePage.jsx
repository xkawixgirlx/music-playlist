import './HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <h2>Welcome! Please click Enter!</h2>
            <img src='https://cdn.pixabay.com/photo/2022/06/21/21/15/audio-7276511_1280.jpg' alt='headphones' />
            <br />
            <button><Link to='/auth'>Enter! </Link></button>
        </>
    )
}