import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server URL
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
