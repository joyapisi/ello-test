import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div class="search-container" >
      <TextField
        label="Search Ello books"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button 
      sx={{backgroundColor:'#335C6E', color:'#CFFAFA', width:'200px'}}
      variant="contained" 
      onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
