import React, { useState, useEffect } from 'react';
import './Home.styles.scss';

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

    useEffect(() => {
        handleSubmit('shrek');
    }, []);

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    }

    const handleSubmit = async (searchTerm) => {
        await fetch(`${API_URL}search?part=snippet&maxResults=5&q=${searchTerm}&key=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            setVideos(data.items);
            setSelectedVideo(data.items[0]);
        })
        .catch(error => console.log(error));
    }

    return(
        <React.Fragment>
            <SearchBar onFormSubmit={handleSubmit}/>
            <div className="all-videos">
                <VideoDetail video={selectedVideo}/>
                <div className="other-videos">
                    <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;