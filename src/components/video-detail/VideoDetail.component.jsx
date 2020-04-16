import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <React.Fragment>
            <div className="main-video">
                <iframe src={videoSrc} frameBorder="0" height="100%" width="100%" title="video player"></iframe>
                <h4>{video.snippet.title} - {video.snippet.channelTitle}</h4>
                <h5>{video.snippet.channelTitle}</h5>
                <p>{video.snippet.description}</p>
            </div>
        </React.Fragment>
    );
};

export default VideoDetail;