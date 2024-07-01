import React, { useState } from "react";
import { Box, TextField } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={{ background: "black", padding: "20px" }}>
        <TextField
          label="Search an Ello Book"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
          InputLabelProps={{
            style: { color: "white" }, 
          }}
          inputProps={{
            style: { color: "white" },
          }}
        />
    </div>
  );
};

export default SearchBar;
