import React from "react";
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ReadingList =({ readingList, onRemoveFromReadingList })=>{
    return(
<List>
      {readingList.map((book, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={book.title}
            secondary={book.author}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => onRemoveFromReadingList(book)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
    )
}

export default ReadingList;