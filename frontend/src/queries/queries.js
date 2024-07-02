import { gql } from "@apollo/client";

export const SEARCH_QUERY = gql`
  query SearchBooks($query: String!) {
    searchBooks(query: $query) {
      title
      author
    }
  }
`;

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;
