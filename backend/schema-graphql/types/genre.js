const graphql = require("graphql");
const Genre = require("../../mongodb/models/genre");
const Author = require("../../mongodb/models/author");
const Book = require("../../mongodb/models/book");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLSchema,
  GraphQLList
} = graphql;

const GenreType = new GraphQLObjectType({
  name: "Genre",
  fields: () => {
    const AuthorType = require("./author");
    const BookType = require("./book");
    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      relatedGenres: {
        type: new GraphQLList(GenreType),
        resolve(parent) {
          return Genre.find({ _id: { $in: parent.relatedGenreIds } });
        }
      },
      books: {
        type: new GraphQLList(BookType),
        resolve(parent) {
          return Book.find({ genreIds: parent._id });
        }
      },
      authors: {
        type: new GraphQLList(AuthorType),
        resolve(parent) {
          return Author.find({ genreIds: parent._id });
        }
      }
    };
  }
});

module.exports = GenreType;
