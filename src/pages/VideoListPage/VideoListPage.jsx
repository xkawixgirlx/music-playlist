import { useEffect, useState } from 'react';
import * as playlistsAPI from '../../utilities/playlists-api';
import VideoItem from '../../components/VideoItem/VideoItem';


export default function VideoPageList() {
    const [videos, setVideos] = useState([]);

    useEffect(function () {
        async function fetchAllVideos() {
            const videos = await playlistsAPI.getAllVideos();
            setVideos(videos);
        }
        fetchAllVideos();
    }, [])

    const videoItems = videos.map((v) => <VideoItem video={v} key={v._id} />)


    return (
        <>
            <h2>VideoPageList</h2>
            <section>{videoItems}</section>
        </>
    );
}