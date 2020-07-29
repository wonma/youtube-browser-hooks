import React from 'react';

const VideoPlayer = (props) => {
    const url = `https://www.youtube.com/embed/${props.videoId}`
        return (
    <iframe
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen="true"
        cc_lang_pref="english"
    >
    </iframe>
); 
}

export default VideoPlayer;