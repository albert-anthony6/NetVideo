import React, { useState } from 'react';
import './SearchBar.styles.scss';

import FontAwesome from 'react-fontawesome';

const SearchBar = ({ onFormSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        // e or event is used to track the inputs value
        setSearchTerm(e.target.value);
    }

    const resetSearch = () => {
        setSearchTerm('');
        onFormSubmit('');
    }

    const handleSubmit = (e) => {
        // event.preventDefault is used so the form does not refresh the page on submit
        e.preventDefault();

        onFormSubmit(searchTerm);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="form-elements">
                <div className="icon" onClick={resetSearch}>
                    <FontAwesome className="fab fa-youtube" style={{color: "red"}} name="youtube" size="2x"/>
                    <h1>YouTube</h1>
                </div>
                <div className="search">
                    <input type="text" value={searchTerm} onChange={handleChange} placeholder="search"/>
                    <button type="submit"><FontAwesome className="fa-search" name="search"/></button>
                </div>
            </div>
        </form>
    );
};

export default SearchBar;