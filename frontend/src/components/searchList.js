import React from 'react';
import { Box, Button, List, ListItem, ListItemText } from '@mui/material';

const SearchList = ({ books,onAdd, book }) => {

  return (
    <Box sx={{ maxHeight: '400px', overflowY: 'auto' }}>
            <List>
                {books.slice(0, 6).map((book) => (
                    <ListItem key={book.id}>
                        <ListItemText primary={book.title} secondary={book.author} />
                        <Button 
                        sx={{ backgroundColor:'#53C2C2', color:'#fff'}}
                        onClick={() => onAdd(book)}>
                          Add To Reading List
                        </Button>
                    </ListItem>
                ))}
                  
            </List>
        </Box>
  )
};

export default SearchList;

