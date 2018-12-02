const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  born: String,
  died: String,
  birthplace: String,
  genreIds: [String],
  influenceIds: [String],
  biography: String
});

module.exports = mongoose.model("Author", authorSchema);
