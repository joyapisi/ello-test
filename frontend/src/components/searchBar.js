import React from "react";
import { Box, TextField } from "@mui/material";

const SearchBar = () => {
  return (
    <div>
      <p>Hello Search Bar</p>
      <Box>
        <TextField />
      </Box>
    </div>
  );
};

export default SearchBar;
// import React, { useState } from 'react';
// import { Box, TextField } from "@mui/material";

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleSearch = () => {
//     onSearch(query);

//   return (
//     <Box>
//       <TextField id="outlined-basic" label="Search for books" variant="outlined"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         onKeyDown={(e) => {
//           if (e.key === 'Enter') handleSearch();
//         }}/>
//     </Box >
//   );
// }
// };

// export default SearchBar;
