import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as playlistsAPI from '../../utilities/playlists-api';
import PlayListForm from '../../components/PlayListForm/PlayListForm';


export default function PlayListPage() {
    const [playlists, setPlaylists] = useState([]);
    const { playlistId } = useParams();

    useEffect(function () {
        async function getPlaylists() {
            const playlists = await playlistsAPI.getAll();
            setPlaylists(playlists);
        }
        getPlaylists();
    }, [playlistId])

    function addPlaylist(playlist) {
        setPlaylists([...playlists, playlist]);
    }

    return (
        <>
            <h2>PlayList List Page</h2>
            {playlists.length === 0 ? (
                <h3>No Playlists Yet!</h3>
            ) : (
                <div>
                    {playlists.map((playlist) => (
                        <div key={playlist._id}>
                            <h3>{playlist.name}</h3>
                        </div>
                    ))}
                </div>
            )}
            <PlayListForm addPlaylist={addPlaylist} />
        </>
    );
}