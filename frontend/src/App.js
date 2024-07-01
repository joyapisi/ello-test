import React from "react";
import { Container, Typography } from "@mui/material";
import SearchBar from "./components/SearchBar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchList from "./components/searchList";
import ReadingList from "./components/readingList";
import SearchManager from "./components/searchManager";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Primary key color
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SearchManager>
      <Container className="App">
        <Typography variant="h4" component="p">
          My Ello Project
        </Typography>
        <SearchBar />
        <SearchList />
        <ReadingList />
      </Container>
      </SearchManager>
    </ThemeProvider>
  );
}

export default App;
