import React from 'react';
import { Query } from "react-apollo";
import { graphql, compose, withApollo } from "react-apollo";
import {
  getAuthorsQuery,
  getGenresQuery,
  getBooksQuery,
  addBookQuery,
  updateBookQuery
} from "../../queries/queries";
import WithCRU from "../WithCRU/WithCRU";
import GenresTable from "../GenresTable/GenresTable";
import GenreForm from "../GenreForm/GenreForm";
import AuthorsTable from "../AuthorsTable/AuthorsTable";
import AuthorForm from "../AuthorForm/AuthorForm";
import Popup from "../Popup/Popup";
import style from "../../styles/form_add.js";

const BookForm = ({
  selectHandler,
  clickHandler,
  changeHandler,
  submitHandler,
  mapFromCache,
  mapOptions,
  wrapProps,
  client,
  formType,
}) => {
  const genreIds = Array.from(wrapProps.genreIds);
  const authorId = wrapProps.authorId;
  return (
    <div>
      <section className="form-add">
        <label className="form-add__label">
          <span className="form-add__name">Add book</span>
          <input
            className="form-add__input"
            name="name"
            type="text"
            placeholder="enter name"
            value={wrapProps.name}
            onChange={e => {
              changeHandler(e);
            }}
          />
        </label>
        <label className="form-add__label">
          <span className="form-add__name">Add author</span>
          <select className="form-add__input" onChange={e => {selectHandler(e, "author");}}>
            <Query query={getAuthorsQuery}>
              {({ loading, error, data }) => {
                if (loading) return <option disabled>Loading authors...</option>;
                return mapOptions(data.authors, authorId.split());
              }}
            </Query>
          </select>
          <Popup trigger={<span style={{ width: "20px", height: "20px" }}>+</span>}>
            <div>
              <AuthorsTable />
              <AuthorForm
                formType="add-author"
                defaultState={{
                  name: "",
                  born: "",
                  died: "",
                  birthplace: "",
                  genreIds: new Set(),
                  influenceIds: new Set(),
                  biography: "",
                  imagePath: ""
                }}
              />
            </div>
          </Popup>
        </label>
        {mapFromCache(authorId.split(), client, "author", style)}
        <label className="form-add__label">
          <span className="form-add__name">Add related genres</span>
          <select className="form-add__input" onChange={e => {selectHandler(e, "genres");}}>
            <Query query={getGenresQuery}>
              {({ loading, error, data }) => {
                if (loading) return <option disabled>Loading genres...</option>;
                return mapOptions(data.genres, genreIds);
              }}
            </Query>
          </select>
          <Popup trigger={<span style={{ width: "20px", height: "20px" }}>+</span>}>
            <div>
              <GenresTable />
              <GenreForm
                formType="add-genre"
                defaultState={{
                  name: "",
                  genreIds: new Set(),
                  description: ""
                }}
              />
            </div>
          </Popup>
        </label>
        {mapFromCache(genreIds, client, "genres", style)}
        <label className="form-add__label">
          <span className="form-add__name">Add description</span>
          <textarea
            className="form-add__input"
            name="description"
            placeholder="enter description"
            value={wrapProps.description}
            onChange={e => {
              changeHandler(e);
            }}
          />
        </label>
        <button className="form-add__submit" onClick={e => {submitHandler(e);}}>
          {formType === "edit-book" ? "Edit" : "Add"} book
        </button>
      </section>
      <style jsx>{style}</style>
    </div>
  );
};

export default compose(
  withApollo,
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(getGenresQuery, { name: "getGenresQuery" }),
  graphql(getBooksQuery, { name: "getBooksQuery" }),
  graphql(addBookQuery, {
    name: "addBookQuery",
    options: {
      refetchQueries: [{
        query: getBooksQuery
      }]
    }
  }),
  graphql(updateBookQuery, {
    name: "updateBookQuery",
    options: {
      refetchQueries: [{
        query: getBooksQuery
      }]
    }
  })
)(WithCRU(withApollo(BookForm)));
