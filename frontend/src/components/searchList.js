import { Grid } from "@mui/material";
import React from "react";


const SearchList = () => {
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