import React from 'react';
import { Grid, Button } from '@mui/material';

const ReadingList = ({ books, onRemove }) => {
  return (
    <Grid container spacing={2}>
      {books.map((book) => (
        <Grid item xs={12} sm={6} md={4} key={book.title}
        sx={{border:'1px solid #4AA088', borderRadius:'4px', padding: '20px 10px', boxShadow: '0 10px 20px rgba(0, 0, 5, 0.15)'}}>
          <div>
            <img src={book.coverPhotoURL} alt={book.title} style={{ width: '100%' }} />
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <Button 
            sx={{backgroundColor:'#F76434', color:'#FFE6DC', width:'200px'}}
            variant="contained" onClick={() => onRemove(book)}>
              Remove
            </Button>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default ReadingList;
