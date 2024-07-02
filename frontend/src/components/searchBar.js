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
        sx={{color:'#CFFAFA', border:'#FABD33'}}
        label="Search Ello books"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button 
      sx={{backgroundColor:'#FAAD00', width:'200px'}}
      variant="contained" 
      onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
