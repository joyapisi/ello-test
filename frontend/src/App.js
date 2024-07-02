import React, { useState, useEffect, useRef } from "react";
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
  const [searchVisible, setSearchVisible] = useState(false);
  const searchRef = useRef(null);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchVisible(false);
      }
    };

    if (searchVisible) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [searchVisible]);

  return (
    <div className="App">
      <h2 className="reading-list-title">Reading List</h2>
      <div className="searchbar-container" ref={searchRef}>
        <SearchBar onSearch={handleSearch} 
        setSearchVisible={setSearchVisible}/>
      
        <SearchList books={searchResults} onAdd={handleAddToReadingList} />
        </div>
          <div className="reading-list-container">
            <ReadingList books={readingList} onRemove={handleRemoveFromReadingList} />
          </div>
      </div>
  );
}

export default App;
