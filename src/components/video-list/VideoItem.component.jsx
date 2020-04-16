import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {

    return(
        <div style={{cursor: "pointer"}} onClick={() => onVideoSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
        </div>
    );
};

export default VideoItem;