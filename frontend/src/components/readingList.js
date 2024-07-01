import React, { useContext, useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import SearchManager from "./searchContext";

const ReadingList = () => {
  const {readingList}= useContext (SearchManager);

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
