import React, { useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const ReadingList = () => {
  const [readingList, setReadingList] = useState([]);

  // Placeholder for the function to update the reading list
  const updateReadingList = (list) => {
    setReadingList(list);
  };

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
