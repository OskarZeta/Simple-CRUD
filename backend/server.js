const express = require("express");
const graphqlHTTP = require("express-graphql");
const next = require("next");
const cors = require("cors");
const mongoose = require("mongoose");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const schema = require("./schema-graphql/schema");
require("dotenv").config();

const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${
  process.env.DB_HOST
}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

app.prepare().then(() => {
  const server = express();

  server.use(cors());

  mongoose.connect(
    url,
    { useNewUrlParser: true }
  );
  mongoose.connection.once("open", () => {
    console.log("Connected to database");
  });

  server.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true
    })
  );

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Server started on ${port} port!`);
  });
});

module.exports = app;
