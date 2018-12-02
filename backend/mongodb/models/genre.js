const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  name: String,
  description: String,
  relatedGenreIds: [String]
});

module.exports = mongoose.model("Genre", genreSchema);
