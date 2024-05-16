import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function VideoCarousel({ video, addNewVideoToPlaylist }) {



    return (
        <div>
            <div class='carousel-element' dangerouslySetInnerHTML={{ __html: video.videoUrl }} />
            <h3>{video.artist}</h3>
            <button onClick={() => addNewVideoToPlaylist(video)} className="add-to-playlist-btn"> Add to Playlist</button>
        </div>
    );
}