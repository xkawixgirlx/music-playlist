export default function VideoItem({ video }) {

    return (
        <div>
            <div class='video-item' dangerouslySetInnerHTML={{__html: video.videoUrl}}/>
            <p>Artist: <br />{video.artist}</p>
            <p class='track'>Title: <br />{video.title}</p>
        </div>
    );
}