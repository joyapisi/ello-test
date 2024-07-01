import React from "react";
import { Container, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SearchProvider } from "./components/searchContext";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/apolloClient"; 
import SearchList from "./components/searchList";
import ReadingList from "./components/readingList";
import SearchBar from "./components/searchBar";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <SearchProvider>
          <Container className="App">
            <Typography variant="h4" component="p">
              My Ello Project
            </Typography>
            <SearchBar />
            <SearchList />
            <ReadingList />
          </Container>
        </SearchProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
