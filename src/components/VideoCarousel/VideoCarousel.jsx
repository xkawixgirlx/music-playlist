import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function VideoCarousel({ video, addNewVideoToPlaylist }) {

  

    return (
            <div>
                <br />
                <div dangerouslySetInnerHTML={{ __html: video.videoUrl }} />
                <button onClick={() => addNewVideoToPlaylist(video)}> Add to Playlist</button>
            </div>
    );
}