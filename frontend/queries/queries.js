import { gql } from "apollo-boost";

const getGenresQuery = gql`
  {
    genres {
      id
      name
      description
      relatedGenres {
        id
        name
        description
      }
    }
  }
`;

const addGenreQuery = gql`
  mutation AddGenre(
    $name: String!
    $description: String!
    $relatedGenreIds: [ID]
  ) {
    addGenre(
      name: $name
      description: $description
      relatedGenreIds: $relatedGenreIds
    ) {
      name
      description
      relatedGenres {
        name
      }
    }
  }
`;

const updateGenreQuery = gql`
  mutation UpdateGenre(
    $id: ID!
    $name: String!
    $description: String!
    $relatedGenreIds: [ID]
  ) {
    updateGenre(
      id: $id
      name: $name
      description: $description
      relatedGenreIds: $relatedGenreIds
    ) {
      id
      name
      description
      relatedGenres {
        id
        name
      }
    }
  }
`;

const removeGenreQuery = gql`
  mutation RemoveGenre($id: ID!) {
    removeGenre(id: $id) {
      name
      description
      relatedGenres {
        name
      }
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
      born
      died
      birthplace
      genres {
        id
        name
      }
      influencedAuthors {
        id
        name
      }
      biography
      books {
        id
        name
      }
    }
  }
`;

// const getAuthorQuery = gql`
//   query getAuthor($id: ID!) {
//     author(id: $id) {
//       id
//       name
//       born
//       died
//       birthplace
//       genres {
//         id
//         name
//       }
//       influencedAuthors {
//         id
//         name
//       }
//       biography,
//       books {
//         id
//         name
//       }
//     }
//   }
// `;

const addAuthorQuery = gql`
  mutation AddAuthor(
    $name: String!
    $born: String
    $died: String
    $birthplace: String
    $genreIds: [ID]
    $influenceIds: [ID]
    $biography: String
  ) {
    addAuthor(
      name: $name
      born: $born
      died: $died
      birthplace: $birthplace
      genreIds: $genreIds
      influenceIds: $influenceIds
      biography: $biography
    ) {
      name
      born
      died
      birthplace
      genres {
        name
      }
      influencedAuthors {
        name
      }
      biography
    }
  }
`;

const updateAuthorQuery = gql`
  mutation UpdateAuthor(
    $id: ID!
    $name: String!
    $born: String
    $died: String
    $birthplace: String
    $genreIds: [ID]
    $influenceIds: [ID]
    $biography: String
  ) {
    updateAuthor(
      id: $id
      name: $name
      born: $born
      died: $died
      birthplace: $birthplace
      genreIds: $genreIds
      influenceIds: $influenceIds
      biography: $biography
    ) {
      id
      name
      born
      died
      birthplace
      genres {
        id
        name
      }
      influencedAuthors {
        id
        name
      }
      biography
    }
  }
`;

const removeAuthorQuery = gql`
  mutation RemoveAuthor($id: ID!) {
    removeAuthor(id: $id) {
      id
      name
      born
      died
      birthplace
      genres {
        id
        name
      }
      influencedAuthors {
        id
        name
      }
      biography
    }
  }
`;

const getBooksQuery = gql`
  {
    books {
      id
      name
      author {
        id
        name
        biography
      }
      genres {
        id
        name
      }
      description
    }
  }
`;

const addBookQuery = gql`
  mutation AddBook(
    $name: String!
    $authorId: ID!
    $genreIds: [ID]
    $description: String
  ) {
    addBook(
      name: $name
      authorId: $authorId
      genreIds: $genreIds
      description: $description
    ) {
      name
      author {
        name
      }
      genres {
        name
      }
      description
    }
  }
`;

const updateBookQuery = gql`
  mutation UpdateBook(
    $id: ID!
    $name: String!
    $authorId: ID!
    $genreIds: [ID]
    $description: String
  ) {
    updateBook(
      id: $id
      name: $name
      authorId: $authorId
      genreIds: $genreIds
      description: $description
    ) {
      id
      name
      author {
        id
        name
      }
      genres {
        id
        name
      }
      description
    }
  }
`;

const removeBookQuery = gql`
  mutation RemoveBook($id: ID!) {
    removeBook(id: $id) {
      id
      name
      author {
        id
        name
      }
      genres {
        id
        name
      }
      description
    }
  }
`;

export {
  getGenresQuery,
  addGenreQuery,
  updateGenreQuery,
  removeGenreQuery,
  getAuthorsQuery,
  addAuthorQuery,
  updateAuthorQuery,
  removeAuthorQuery,
  getBooksQuery,
  addBookQuery,
  updateBookQuery,
  removeBookQuery
};
