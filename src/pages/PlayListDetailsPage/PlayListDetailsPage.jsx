import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NewVideoForm from '../../components/NewVideoForm/NewVideoForm';
import * as playlistsAPI from '../../utilities/playlists-api';
import VideoItem from '../../components/VideoItem/VideoItem';


export default function PlayListDetails() {
    const { playlistId } = useParams();
    // const [videos, setVideos] = useState([]); //This will be videos playlist missing
    const [playlist, setPlaylist] = useState(null);

    useEffect(() => {
        async function fetchPlaylist() {
            try {
                const playlist = await playlistsAPI.getById(playlistId);
                setPlaylist(playlist);
            } catch (error) {
                console.error('Error fetching playlist:', error);
            }
        }

        fetchPlaylist();
    }, [playlistId]);

    if (!playlist) return null;


    async function addNewVideoToPlaylist(video) {
        try {
            const updatedPlaylist = await playlistsAPI.addNewVideoToPlaylist(playlist._id, video);
            setPlaylist(updatedPlaylist);
        } catch (err) {
            console.log(`Video couldn't be added`, err);
        }
    }

    const videoItems = playlist.videos.map((v) => <VideoItem video={v} key={v._id} />)

    return (
        <div>
            <h2>Add Video to Playlist</h2>
            <section>{videoItems}</section>
            <NewVideoForm addNewVideoToPlaylist={addNewVideoToPlaylist} />
        </div>
    );
}