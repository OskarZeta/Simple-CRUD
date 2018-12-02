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

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => {
    const GenreType = require("./genre");
    const BookType = require("./book");
    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      born: { type: GraphQLString },
      died: { type: GraphQLString },
      birthplace: { type: GraphQLString },
      genres: {
        type: new GraphQLList(GenreType),
        resolve(parent) {
          return Genre.find({ _id: { $in: parent.genreIds } });
        }
      },
      influencedAuthors: {
        type: new GraphQLList(AuthorType),
        resolve(parent) {
          return Author.find({ _id: { $in: parent.influenceIds } });
        }
      },
      biography: { type: GraphQLString },
      books: {
        type: new GraphQLList(BookType),
        resolve(parent) {
          return Book.find({ authorId: parent._id });
        }
      }
    };
  }
});

module.exports = AuthorType;
