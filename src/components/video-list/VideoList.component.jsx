import React from 'react';

import VideoItem from '../video-list/VideoItem.component';

const VideoList = ({ videos, onVideoSelect }) => {
    let listOfVideos = videos.map((video) => <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video}/>);

    return listOfVideos;
};

export default VideoList;