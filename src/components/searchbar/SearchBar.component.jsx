import React, { useState } from 'react';
import { render } from '@testing-library/react';

const SearchBar = ({ onFormSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        // e or event is used to track the inputs value
        setSearchTerm(e.target.value);
    }

    const handleSubmit = (e) => {
        // event.preventDefault is used so the form does not refresh the page on submit
        e.preventDefault();

        onFormSubmit(searchTerm);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchTerm} onChange={handleChange} placeholder="search..."/>
        </form>
    );
};

export default SearchBar;