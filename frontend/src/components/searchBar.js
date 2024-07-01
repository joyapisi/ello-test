import React, { useContext, useState } from "react";
import {Box, TextField } from "@mui/material";
import SearchManager from "./searchManager";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { setSearchResults } = useContext(SearchContext);

  const handleSearch = () => {
    const results = [
      { title: `Result for ${query} 1` },
      { title: `Result for ${query} 2` },
    ];
    setSearchResults(books);
  };

  return (
    <Box id="search cntainer" >
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
    </Box>
  );
};

export default SearchBar;
