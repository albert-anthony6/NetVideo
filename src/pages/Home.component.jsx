import React from 'react';

import {
    API_URL,
    API_KEY
} from '../assets/config';

import SearchBar from '../components/searchbar/SearchBar.component';

const Home = () => {
    const handleSubmit = async (searchTerm) => {
        await fetch(`${API_URL}/search?part=snippet&maxResults=5&q=${searchTerm}&key=${API_KEY}`)
        .then(res => res.json())
        .then(data => console.log(data.items))
        .catch(error => console.log(error));
    }

    return(
        <div>
            <SearchBar onFormSubmit={handleSubmit}/>
        </div>
    );
};

export default Home;