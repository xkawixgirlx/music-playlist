import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as playlistsAPI from '../../utilities/playlists-api';
import PlayListForm from '../../components/PlayListForm/PlayListForm';
import PlayListDetails from '../PlayListDetailsPage/PlayListDetailsPage';


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


    async function addPlaylist(playlist) {
        try {
            const newPlaylist = await playlistsAPI.add(playlist);
            setPlaylists([...playlists, newPlaylist]);
        } catch (err) {
            console.log("Couldn't add Playlist:", err);
        }
    }


    return (
        <>
            <h2>PlayList List Page</h2>
            {playlists.length === 0 ? (
                <h3>No Playlists Yet!</h3>
            ) : (
                <div>
                    {playlists.map((playlist) => (
                        <div>
                            <Link key={playlist._id} to={`/playlists/${playlist.name}`}>
                                <h3>{playlist.name}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
            <PlayListForm addPlaylist={addPlaylist} />
        </>
    );
}