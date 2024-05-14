import { useState } from 'react';


export default function PlaylistDetailsForm({ addNewVideo }) {
    const [newVideo, setNewVideo] = useState({
        videoUrl: '',
        artist: '',
        title: ''
    });



    function handleChange(evt) {
        const newVideoData = { ...newVideo, [evt.target.name]: evt.target.value };
        setNewVideo(newVideoData);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        addNewVideo(newVideo);
        setNewVideo({
            videoUrl: '',
            artist: '',
            title: '',
        });
    }


    return (
        <>
            <h2>PlaylistDetailsForm</h2>
            <div>
                <form className='form-container' onSubmit={handleSubmit}>
                    <label>Youtube URL: </label>
                    <input
                        name='videoUrl'
                        value={newVideo.videoUrl}
                        onChange={handleChange}
                        pattern='.{2,}'
                    />
                    <label>Artist Name: </label>
                    <input
                        name='artist'
                        value={newVideo.artist}
                        onChange={handleChange}
                        pattern='.{1,}'
                    />
                    <label>Track Title:  </label>
                    <input
                        name='title'
                        value={newVideo.title}
                        onChange={handleChange}
                        pattern='.{2,}'
                    />
                    <button type='submit'>Add Music Video</button>
                </form>
            </div>
        </>
    );
}