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
import LinkCustom from "../LinkCustom/LinkCustom";
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
          <span className="form-add__name">Name</span>
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
          <span className="form-add__name">Author</span>
          <select className="form-add__input" onChange={e => {selectHandler(e, "author");}}>
            <Query query={getAuthorsQuery}>
              {({ loading, error, data }) => {
                if (loading) return <option disabled>Loading authors...</option>;
                return mapOptions(data.authors, authorId.split());
              }}
            </Query>
          </select>
          <LinkCustom href="/authors"/>
        </label>
        {mapFromCache(authorId.split(), client, "author", style)}
        <label className="form-add__label">
          <span className="form-add__name">Related genres</span>
          <select className="form-add__input" onChange={e => {selectHandler(e, "genres");}}>
            <Query query={getGenresQuery}>
              {({ loading, error, data }) => {
                if (loading) return <option disabled>Loading genres...</option>;
                return mapOptions(data.genres, genreIds);
              }}
            </Query>
          </select>
          <LinkCustom href="/genres"/>
        </label>
        {mapFromCache(genreIds, client, "genres", style)}
        <label className="form-add__label">
          <span className="form-add__name">Description</span>
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
        <div className="form-add__btns">
          <button className="form-add__submit" onClick={e => {submitHandler(e);}}>
            {formType === "edit-book" ? "Save changes" : "Create book"}
          </button>
          <button className="form-add__close">Close</button>
        </div>
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
