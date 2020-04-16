import React from 'react';
import './VideoDetail.styles.scss';

const VideoDetail = ({ video }) => {
    if(!video) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <React.Fragment>
            <div className="main-video">
                <iframe src={videoSrc} frameBorder="0" title="video player"></iframe>
                <div className="details">
                    <p className="title">{video.snippet.title}</p>
                    <p className="channel">{video.snippet.channelTitle}</p>
                    <p className="description">{video.snippet.description}</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default VideoDetail;