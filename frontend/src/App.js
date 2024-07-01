import React from "react";
import "./App.css";
import SearchBar from "./components/searchBar";

function App() {
  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  return (
    <div className="App">
      <p>My Ello Project</p>
      <SearchBar onSearch={handleSearch}/>
    </div>
  );
}

export default App;
