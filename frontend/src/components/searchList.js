import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const SearchList = ({ books }) => {

  return (
    <Box sx={{ maxHeight: '400px', overflowY: 'auto' }}>
            <List>
                {books.slice(0, 6).map((book) => (
                    <ListItem key={book.id}>
                        <ListItemText primary={book.title} secondary={book.author} />
                    </ListItem>
                ))}
            </List>
        </Box>
  )
};

export default SearchList;
