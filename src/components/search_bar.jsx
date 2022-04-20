import React, { useState } from 'react';

const SearchBar = (props) => {
  const [searchterm, setSearchTerm] = useState('');

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearchChange(event.target.value);
  };
  return (
    <div className="search-bar">
      <input onChange={onInputChange} value={searchterm}   placeholder="search" /> 
    </div>
  );
};

export default SearchBar;