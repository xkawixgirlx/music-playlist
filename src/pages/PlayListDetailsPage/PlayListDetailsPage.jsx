import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PlaylistDetailsForm from '../../components/PlaylistDetailsForm/PlaylistDetailsForm';
import * as playlistsAPI from '../../utilities/playlists-api';


export default function PlayListDetails() {
    const { playlistName } = useParams();
    const [videos, setVideos] = useState([]);
    const [playlist, setPlaylist] = useState(null);

    useEffect(() => {
        async function fetchPlaylist() {
            try {
                const fetchedPlaylist = await playlistsAPI.getAllVideos({ name: playlistName });
                setPlaylist(fetchedPlaylist);
            } catch (error) {
                console.error('Error fetching playlist:', error);
            }
        }

        fetchPlaylist();
    }, [playlistName]);


    async function addNewVideo(video) {
        try {
            const newMusicVideo = await playlistsAPI.addVideo({ name: playlistName }, video);
            setVideos([...videos, newMusicVideo]);
        } catch (err) {
            console.log(`Video couldn't be added`, err);
        }
    }



    return (
        <>
            <div>
                <h2>Add Video to Playlist</h2>
                <PlaylistDetailsForm addNewVideo={addNewVideo} />
            </div>
        </>
    );
}