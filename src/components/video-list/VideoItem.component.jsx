import React from 'react';
import './VideoItem.styles.scss';

const VideoItem = ({ video, onVideoSelect }) => {

    return(
        <div style={{cursor: "pointer"}} className="side-videos" onClick={() => onVideoSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
            <div className="side-details">
                <p>{video.snippet.title}</p>
                <p className="channel-title">{video.snippet.channelTitle}</p>
            </div>
        </div>
    );
};

export default VideoItem;