import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as playlistsAPI from '../../utilities/playlist-api';


export default function PlayListPage() {
    const [playlists, setPlaylists] = useState([]);
    const {playlistId} = useParams();

useEffect(function () {
    async function getPlaylist() {
        const playlists = await playlistsAPI.getAll();
        setPlaylists(playlists);
    }
    getPlaylist();
}, [playlistId]) 

    return (
        <>
            <h2>PlayListPage</h2>
            {playlists.length === 0 ? (
                <h3>No Playlists Yet!</h3>
            ) : (
                <div>
                    {playlists.map((playlist) => (
                        <div key={playlist._id}>
                            <h3>{playlist.name}</h3>

                        </div>
                    ))}
                    Playlist List
                </div>
            )}
            {/* <PlayListForm /> */}
        </>
    );
}