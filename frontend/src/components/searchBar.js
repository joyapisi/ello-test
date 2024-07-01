import React, { useState } from "react";
import {TextField } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div id="search cntainer" >
        <TextField 
          label="Search an Ello Book"
          variant="contained"
          color="primary"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
        />
    </div>
  );
};

export default SearchBar;
