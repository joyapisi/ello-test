import { ApolloProvider } from '@apollo/client';
import { client } from './apollo-client';
import SearchBar from './components/searchBar';
import SearchList from './components/searchList';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SearchBar />
      <SearchList />
      <MyApp />
    </ApolloProvider>
  );
};

export default App;
