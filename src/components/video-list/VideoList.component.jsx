import React from 'react';

import VideoItem from '../video-list/VideoItem.component';

const VideoList = ({ videos }) => {
    let listOfVideos = videos.map((video) => <VideoItem key={video.id.videoId} video={video}/>);

    return listOfVideos;
};

export default VideoList;