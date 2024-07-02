import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-container" >
      <TextField
        sx={{ marginRight: '100px' }}
        label="Search for books"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button 
      sx={{backgroundColor:'4AA088', color:'#335C6E', width:'200px'}}
      variant="contained" 
      onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
