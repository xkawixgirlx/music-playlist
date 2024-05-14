import { useState, useEffect } from 'react';
import PlaylistDetailsForm from '../../components/PlaylistDetailsForm/PlaylistDetailsForm';
import * as playlistsAPI from '../../utilities/playlists-api';


export default function PlayListDetails() {
const [videos, setVideos] = useState([]);

useEffect(function () {
    async function getVideos() {
        const videos = await playlistsAPI.getAllVideos();
        setVideos(videos);
    }
    getVideos();
}, []); 


 

    return (
        <>
            <div>
                <h2>PlayList Details</h2>
                    <PlaylistDetailsForm />
            </div>
        </>
    );
}