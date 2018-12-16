const graphql = require("graphql");
const GenreType = require("./types/genre");
const AuthorType = require("./types/author");
const BookType = require("./types/book");
const Genre = require("../mongodb/models/genre");
const Author = require("../mongodb/models/author");
const Book = require("../mongodb/models/book");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    genre: {
      type: GenreType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Genre.findById(args.id);
      }
    },
    genres: {
      type: new GraphQLList(GenreType),
      resolve() {
        return Genre.find({});
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Author.findById(args.id);
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve() {
        return Author.find({});
      }
    },
    book: {
      type: BookType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Book.findById(args.id);
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve() {
        return Book.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addGenre: {
      type: GenreType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        relatedGenreIds: { type: new GraphQLList(GraphQLID) }
      },
      resolve(parent, args) {
        let genre = new Genre({
          name: args.name,
          description: args.description,
          relatedGenreIds: args.relatedGenreIds
        });
        return genre.save();
      }
    },
    updateGenre: {
      type: GenreType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        relatedGenreIds: { type: new GraphQLList(GraphQLID) }
      },
      resolve(parent, args) {
        return Genre.findOneAndUpdate(
          { _id: args.id },
          {
            name: args.name,
            description: args.description,
            relatedGenreIds: args.relatedGenreIds
          }
        );
      }
    },
    removeGenre: {
      type: GenreType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Genre.updateMany(
          { relatedGenreIds: args.id },
          { $pull: { relatedGenreIds: args.id } }
        )
        .then(() => {
          return Author.updateMany(
            { genreIds: args.id },
            { $pull: { genreIds: args.id } }
          );
        })
        .then(() => {
          return Book.updateMany(
            { genreIds: args.id },
            { $pull: { genreIds: args.id } }
          );
        })
        .then(() => {
          return Genre.findByIdAndRemove(args.id);
        });
      }
    },
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        born: { type: GraphQLString },
        died: { type: GraphQLString },
        birthplace: { type: GraphQLString },
        genreIds: { type: new GraphQLList(GraphQLID) },
        influenceIds: { type: new GraphQLList(GraphQLID) },
        biography: { type: GraphQLString }
      },
      resolve(parent, args) {
        let author = new Author({
          name: args.name,
          born: args.born,
          died: args.died,
          birthplace: args.birthplace,
          genreIds: args.genreIds,
          influenceIds: args.influenceIds,
          biography: args.biography
        });
        return author.save();
      }
    },
    updateAuthor: {
      type: AuthorType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        born: { type: GraphQLString },
        died: { type: GraphQLString },
        birthplace: { type: GraphQLString },
        genreIds: { type: new GraphQLList(GraphQLID) },
        influenceIds: { type: new GraphQLList(GraphQLID) },
        biography: { type: GraphQLString }
      },
      resolve(parent, args) {
        return Author.findOneAndUpdate(
          { _id: args.id },
          {
            name: args.name,
            born: args.born,
            died: args.died,
            birthplace: args.birthplace,
            genreIds: args.genreIds,
            influenceIds: args.influenceIds,
            biography: args.biography
          }
        );
      }
    },
    removeAuthor: {
      type: AuthorType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Author.updateMany(
          { influenceIds: args.id },
          { $pull: { influenceIds: args.id } }
        )
        .then(() => {
          return Book.remove({ authorId: args.id });
        })
        .then(() => {
          return Author.findByIdAndRemove(args.id);
        });
      }
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) },
        genreIds: { type: new GraphQLList(GraphQLID) },
        description: { type: GraphQLString }
      },
      resolve(parent, args) {
        let book = new Book({
          name: args.name,
          authorId: args.authorId,
          genreIds: args.genreIds,
          description: args.description
        });
        return book.save();
      }
    },
    updateBook: {
      type: BookType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) },
        genreIds: { type: new GraphQLList(GraphQLID) },
        description: { type: GraphQLString }
      },
      resolve(parent, args) {
        return Book.findOneAndUpdate(
          { _id: args.id },
          {
            name: args.name,
            authorId: args.authorId,
            genreIds: args.genreIds,
            description: args.description
          }
        );
      }
    },
    removeBook: {
      type: BookType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Book.findByIdAndRemove(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
