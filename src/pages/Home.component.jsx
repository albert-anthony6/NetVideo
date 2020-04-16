import React, { useState } from 'react';

import {
    API_URL,
    API_KEY
} from '../assets/config';

import SearchBar from '../components/searchbar/SearchBar.component';
import VideoDetail from '../components/video-detail/VideoDetail.component';
import VideoList from '../components/video-list/VideoList.component';

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleSubmit = async (searchTerm) => {
        await fetch(`${API_URL}/search?part=snippet&maxResults=5&q=${searchTerm}&key=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            setVideos(data.items);
            setSelectedVideo(data.items[0]);
        })
        .catch(error => console.log(error));
    }

    return(
        <div>
            <SearchBar onFormSubmit={handleSubmit}/>
            <VideoDetail video={selectedVideo}/>
            <VideoList videos={videos}/>
        </div>
    );
};

export default Home;