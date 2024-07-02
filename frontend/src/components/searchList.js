import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const SearchList = ({ books, onAdd }) => {
  return (
    <List>
      {books.map((book) => (
        <ListItem key={book.title} alignItems="flex-start">
          <ListItemText primary={book.title} secondary={book.author} />
          <Button variant="contained" onClick={() => onAdd(book)}>
            Add to Reading List
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default SearchList;
