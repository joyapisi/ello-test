import React, { createContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [readingList, setReadingList] = useState([]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults, readingList, setReadingList }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
