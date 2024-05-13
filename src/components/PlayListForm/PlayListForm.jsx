import { useState } from 'react';


export default function PlayListForm({ handleAddPlaylist }) {
    const [newVideo, setNewVideo] = useState({
        title: '',
        artist: '',
        videoUrl: '',
    });

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddPlaylist();
        setNewVideo(newVideo);
    }

    return (
        <>
            <h2>Make a PlayList/Add Tracks</h2>
            <form onSubmit={handleSubmit}>
                <label>Youtube URL: </label>
                <input
                    name='videoUrl'
                    value={newVideo.videoUrl}
                    onChange={() => setNewVideo(newVideo)}
                    required
                    pattern='.{2, }'
                />
                <label>Artist Name: </label>
                <input
                    name='artist'
                    value={newVideo.artist}
                    onChange={() => setNewVideo(newVideo)}
                    required
                    pattern='.{1, }'
                />
                <label>Track Title:  </label>
                <input
                    name='title'
                    value={newVideo.title}
                    onChange={() => setNewVideo(newVideo)}
                    required
                    pattern='.{2, }'
                />
                <button type='submit'>Make Playlist/AddTrack</button>
            </form>
        </>
    );
}