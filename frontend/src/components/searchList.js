import React, { useContext } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import SearchContext from "./searchContext";

const SearchList = () => {
  const { searchResults } = useContext(SearchContext);

  return (
    <List>
      {searchResults.map((result, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={result.title}
            secondary={result.author}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default SearchList;
