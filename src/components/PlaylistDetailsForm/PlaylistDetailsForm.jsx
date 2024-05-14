import { useState } from 'react';


export default function PlaylistDetailsForm() {
    const [newVideo, setNewVideo] = useState({
        videoUrl: '',
        artist: '',
        track: ''
    });



    function handleChange(evt) {
        const newVideoData = { ...newVideo, [evt.target.name]: evt.target.value };
        setNewVideo(newVideoData);
    }





    return (
        <>
            <h2>PlaylistDetailsForm</h2>
            <div>
                <form className='form-container'>
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