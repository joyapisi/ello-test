import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";


const SearchList = () => {
    
    const filteredBooks = data.books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
    return(
        <div>
        <p>search List here</p>
        <Grid>
          <Card>
            <CardContent>
              <Typography variant="h6">title</Typography>
              <Typography variant="body2" color="textSecondary">author</Typography>
              <Button>Add Ello Book</Button>
            </CardContent>
          </Card>
        </Grid>
    </div>
    )
}

export default SearchList;