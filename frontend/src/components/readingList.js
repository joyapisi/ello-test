import React, { useContext } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import SearchContext from "./searchContext";

const ReadingList = () => {
  const { readingList } = useContext(SearchContext);

  return (
    <List>
      {readingList.map((item, index) => (
        <ListItem key={index}>
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default ReadingList;
