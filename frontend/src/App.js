import React, { useState } from "react";
import "./App.css";
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import SearchBar from "./components/searchBar";
import SearchList from "./components/searchList";
import ReadingList from "./components/readingList";

const GET_BOOKS = gql`
  query Books {
    books {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [readingList, setReadingList] = useState([]);
  const { data } = useQuery(GET_BOOKS);

  const handleSearch = (query) => {
    if (data && data.books) {
      const results = data.books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  const handleAddToReadingList = (book) => {
    setReadingList((prevList) => [...prevList, book]);
  };

  const handleRemoveFromReadingList = (book) => {
    setReadingList((prevList) => prevList.filter((b) => b.title !== book.title));
  };

  return (
    <div className="App">
      <h1>My Ello Project</h1>
      <div className="searchbar-container">
        <SearchBar onSearch={handleSearch} />
      
        <SearchList books={searchResults} onAdd={handleAddToReadingList} />
        </div>
          <h2 sx={{backgroundColor:'#FAAD00'}}>
            Reading List
          </h2>
          <div className="reading-list-container">
            <ReadingList books={readingList} onRemove={handleRemoveFromReadingList} />
          </div>
      </div>
  );
}

export default App;
