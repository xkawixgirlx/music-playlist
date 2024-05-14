import { useEffect, useState } from 'react';
import * as videosAPI from '../../utilities/videos-api';
import VideoItem from '../../components/VideoItem/VideoItem';


export default function VideoPageList() {
    const [videos, setVideos] = useState([]);

    useEffect(function () {
        async function fetchAllVideos() {
            const videos = await videosAPI.getAllVideos();
            setVideos(videos);
        }
        fetchAllVideos();
    }, [])

    const videoItems = videos.map((v) => <VideoItem video={v} key={v._id} />)


    return (
        <>
            <h2>All Videos</h2>
            <section>{videoItems}</section>
        </>
    );
}