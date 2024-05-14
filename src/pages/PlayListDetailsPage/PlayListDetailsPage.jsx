import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PlaylistDetailsForm from '../../components/PlaylistDetailsForm/PlaylistDetailsForm';
import * as playlistsAPI from '../../utilities/playlists-api';


export default function PlayListDetails({ setUser }) {
    const { playlistName } = useParams();
    const [videos, setVideos] = useState([]);
    const [playlist, setPlaylist] = useState (null);

    useEffect(function () {
        async function getVideos() {
            const videos = await playlistsAPI.getAllVideos({ name: playlistName });
            setPlaylist(videos);
        }
        getVideos();
    }, [playlistName]);

    async function addNewVideo(video) {
        try {
            const newMusicVideo = await playlistsAPI.addVideo(playlist, video);
            setVideos([...videos, newMusicVideo]);
        } catch (err) {
            console.log(`Video couldn't be added`, err);
        }
    }



    return (
        <>
            <div>
                <h2>PlayList Details</h2>
                <PlaylistDetailsForm addNewVideo={addNewVideo} />
            </div>
        </>
    );
}