import { useQuery } from "@apollo/client";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { GET_BOOKS } from "../queries";

const SearchList = ({searchQuery}) => {
    const {data} = iseQuery(GET_BOOKS);
    const filteredBooks = data.books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <p>search List here</p>
      <Grid container>
        {filteredBooks.map((book) => (
          <Grid item key={book.title}>
            <Card>
              <CardContent>
                <Typography variant="h6">title</Typography>
                <Typography variant="body2" color="textSecondary">
                  author
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
