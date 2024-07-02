import React from 'react';
import { Grid, Button } from '@mui/material';

const ReadingList = ({ books, onRemove }) => {
  return (
    <Grid container spacing={2}>
      {books.map((book) => (
        <Grid item xs={12} sm={6} md={4} key={book.title}>
          <div>
            <img src={book.coverPhotoURL} alt={book.title} style={{ width: '100%' }} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <Button variant="contained" onClick={() => onRemove(book)}>
              Remove
            </Button>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default ReadingList;
