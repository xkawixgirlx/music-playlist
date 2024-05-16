export default function VideoItem({ video }) {

    return (
        <div>
            <div class='video-item' dangerouslySetInnerHTML={{__html: video.videoUrl}}/>
            <p>Artist: {video.artist}</p>
            <p class='track'>Track Title: {video.title}</p>
        </div>
    );
}