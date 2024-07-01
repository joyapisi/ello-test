import React from "react";
import "./App.css";
import SearchBar from "./components/searchBar";
import SearchList from "./components/searchList";

function App() {
  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  return (
    <div className="App">
      <p>My Ello Project</p>
      <SearchBar onSearch={handleSearch}/>
      <SearchList />   
    </div>
  );
}

export default App;
