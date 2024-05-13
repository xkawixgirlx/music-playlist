import { Link } from 'react-router-dom';


export default function PlayListDetails({ playlist }) {


    return (
        <>
            <div>
                <h2>PlayList Details</h2>
                <h3>Name: {playlist}</h3>                
            </div>
        </>
    );
}