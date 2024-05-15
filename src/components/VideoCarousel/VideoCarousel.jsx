import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function VideoCarousel({ video }) {

  

    return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: video.videoUrl }} />
                <button> Add to Playlist</button>
            </div>
    );
}