import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/searchBar";
import SearchList from "./components/searchList";

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [readingList, setReadingList] = useState([]);

  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  const handleAddToReadingList = (book) => {
    setReadingList([...readingList, book]);
  };

  return (
    <div className="App">
      <p>My Ello Project</p>
      <SearchBar onSearch={handleSearch}/>
      <SearchList searchQuery={searchQuery} onAddToReadingList={handleAddToReadingList}/> 
      <ReadingList readingList={readingList} onRemoveFromReadingList={handleRemoveFromReadingList}/> 
    </div>
  );
}

export default App;
