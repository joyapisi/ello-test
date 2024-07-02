import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const SearchList = ({ books, onAdd }) => {
  return (
    <Paper
      style={{
        position: 'absolute',
        top: '60px', // Adjust based on your search bar height and margin
        width: '100%',
        maxHeight: '200px',
        overflowY: 'auto',
        zIndex: 1000,
      }}
    >
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
  </Paper>
  );
};

export default SearchList;
