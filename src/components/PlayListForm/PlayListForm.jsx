import { useState } from 'react';


export default function PlayListForm({ addPlaylist }) {
    const [newPlaylist, setNewPlaylist] = useState({
        name: '',
    });


    function handleChange(evt) {
        const newPLaylistData = {...newPlaylist, [evt.target.name]: evt.target.value }; 
        setNewPlaylist(newPLaylistData);
    }


    function handleSubmit(evt) {
        evt.preventDefault();
        addPlaylist(newPlaylist);
        setNewPlaylist({name: ''});
    }
    

    return (
        <>
            <h2>Make a PlayList</h2>
            <div>
                <form className='form-container' onSubmit={handleSubmit}>
                    <label>Name of Playlist: </label>
                    <input
                        name='name'
                        value={newPlaylist.name}
                        onChange={handleChange}
                        pattern='.{1,}'
                    />
                    <button type='submit'>Make Playlist!</button>
                </form>
            </div>
        </>
    );
}