import React from "react";
import { useQuery } from "@apollo/client";
import { Grid, Button, Card, CardContent, Typography } from "@mui/material";
import { GET_BOOKS } from "./queries";

const SearchResults = ({ searchQuery, onAddToReadingList }) => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredBooks = data.books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Grid container spacing={2}>
      {filteredBooks.map(book => (
        <Grid item key={book.title} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">{book.title}</Typography>
              <Typography variant="body2" color="textSecondary">{book.author}</Typography>
              <Button onClick={() => onAddToReadingList(book)}>Add to Reading List</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchResults;
