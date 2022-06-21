import React from "react";

const SearchBox = ({ searchfield, searchChange }) => { //Destructured, searchChange passed in as props which calls the function in App2.js
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type='search'
                placeholder="search Robots"
                onChange={searchChange} //onChange is a HTML event change listener for search field
            />
        </div>
    );
}

export default SearchBox;