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

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => {
    const GenreType = require("./genre");
    const AuthorType = require("./author");
    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      author: {
        type: AuthorType,
        resolve(parent) {
          return Author.findById(parent.authorId);
        }
      },
      genres: {
        type: new GraphQLList(GenreType),
        resolve(parent) {
          return Genre.find({ _id: { $in: parent.genreIds } });
        }
      },
      description: { type: GraphQLString }
    };
  }
});

module.exports = BookType;
