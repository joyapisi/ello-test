import { useQuery } from "@apollo/client";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { GET_BOOKS } from "./queries";

const SearchList = ({ searchQuery }) => {
  const { data, loading, error } = useQuery(GET_BOOKS);

  if (loading) {
    // console.log("Loading...");
    return <div>Loading...</div>;
  }

  if (error) {
    // console.error("Error:", error);
    return <div>Error: {error.message}</div>;
  }

  console.log("Data:", data);

  const filteredBooks = data.books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <p>search List here</p>
      <Grid container spacing={2}>
        {filteredBooks.map((book) => (
          <Grid item key={book.title} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {book.author}
                </Typography>
                <Button>Add Ello Book</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SearchList;
