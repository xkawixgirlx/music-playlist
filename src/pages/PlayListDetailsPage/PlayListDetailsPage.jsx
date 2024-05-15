import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NewVideoForm from '../../components/NewVideoForm/NewVideoForm';
import * as playlistsAPI from '../../utilities/playlists-api';
import VideoItem from '../../components/VideoItem/VideoItem';
import VideoCarousel from '../../components/VideoCarousel/VideoCarousel';
import * as videosAPI from '../../utilities/videos-api';


export default function PlayListDetails() {
    const { playlistId } = useParams();
    const [videos, setVideos] = useState([]); //This will be videos playlist missing
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

        async function getVideosForCarousel() {
            try {
                const addToVideosCarousel = await videosAPI.getVideosForCarousel();
                setVideos(addToVideosCarousel);
            } catch (err) {
                console.log(`Video couldn't be added`, err);
            }
        }
        getVideosForCarousel();
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
    const videoCarousel = videos.map((vid) => <VideoCarousel video={vid} key={vid._id} addNewVideoToPlaylist={addNewVideoToPlaylist}  />)

    return (
        <div>
            <h2>Add Video to Playlist</h2>
            <section>{videoItems}</section>
            <NewVideoForm addNewVideoToPlaylist={addNewVideoToPlaylist} />
            <Carousel>{videoCarousel}</Carousel>
        </div>
    );
}