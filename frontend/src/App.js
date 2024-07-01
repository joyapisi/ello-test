import React from "react";
import { Container, Typography } from "@mui/material";
import SearchBar from "./components/SearchBar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchList from "./components/searchList";
import ReadingList from "./components/readingList";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Primary key color
    },
    secondary: {
      main: '#f50057', // Secondary key color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container className="App">
        <Typography variant="h4" component="p">
          My Ello Project
        </Typography>
        <SearchBar />
        <SearchList />
        <ReadingList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
