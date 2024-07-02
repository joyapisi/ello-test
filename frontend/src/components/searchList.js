import React from 'react';
import { Box, Button, List, ListItem, ListItemText } from '@mui/material';

const SearchList = ({ books,onAdd }) => {

  return (
    <Box sx={{ maxHeight: '400px', overflowY: 'auto' }}>
            <List>
                {books.slice(0, 6).map((book) => (
                    <ListItem key={book.id}>
                        <ListItemText 
                        primary={book.title} 
                        secondary={book.author} />
                        <Button 
                        sx={{ backgroundColor:'#5ACCCC', color:'#FFF', boxShadow: '0 10px 20px rgba(0, 0, 5, 0.15)'}}
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

