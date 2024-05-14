export default function VideoItem({ video }) {

    return (
        <div>
            <div dangerouslySetInnerHTML={{__html: video.videoUrl}}/>
            <p>{video.artist}</p>
            <p>{video.title}</p>
        </div>
    );
}