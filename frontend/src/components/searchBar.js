import React, { useState } from 'react';
import { Box, TextField } from "@mui/material";

const SearchBar = () => {
  return (
    <Box>
      <TextField id="outlined-basic" placeholder="search" label="Outlined" variant="outlined" />
    </Box >
  );
};

export default SearchBar;
