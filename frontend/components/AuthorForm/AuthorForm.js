import React from 'react';
import { Query } from "react-apollo";
import { graphql, compose, withApollo } from "react-apollo";
import {
  getAuthorsQuery,
  addAuthorQuery,
  updateAuthorQuery,
  getGenresQuery
} from "../../queries/queries";
import WithCRU from "../WithCRU/WithCRU";
import style from "../../styles/form_add.js";

const AuthorForm = ({
  selectHandler,
  clickHandler,
  changeHandler,
  submitHandler,
  mapFromCache,
  mapOptions,
  wrapProps,
  client,
  formType
}) => {
  const genreIds = Array.from(wrapProps.genreIds);
  const influenceIds = Array.from(wrapProps.influenceIds);
  return (
    <div>
      <section className="form-add">
        <label className="form-add__label">
          <span className="form-add__name">Add name</span>
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
          <span className="form-add__name">Add date of birth</span>
          <input
            className="form-add__input"
            type="text"
            name="born"
            placeholder="enter date"
            value={wrapProps.born}
            onChange={e => {
              changeHandler(e);
            }}
          />
        </label>
        <label className="form-add__label">
          <span className="form-add__name">Add date of death (if dead)</span>
          <input
            className="form-add__input"
            type="text"
            name="died"
            placeholder="enter date"
            value={wrapProps.died}
            onChange={e => {
              changeHandler(e);
            }}
          />
        </label>
        <label className="form-add__label">
          <span className="form-add__name">Add place of birth</span>
          <input
            className="form-add__input"
            type="text"
            name="birthplace"
            placeholder="enter place of birth"
            value={wrapProps.birthplace}
            onChange={e => {
              changeHandler(e);
            }}
          />
        </label>
        <label className="form-add__label">
          <span className="form-add__name">Add genres</span>
          <select className="form-add__input" onChange={e => {selectHandler(e, "genres");}}>
            <Query query={getGenresQuery}>
              {({ loading, error, data }) => {
                if (loading) return <option disabled>Loading genres...</option>;
                return mapOptions(data.genres, genreIds);
              }}
            </Query>
          </select>
        </label>
        {mapFromCache(genreIds, client, "genres", style)}
        <label className="form-add__label">
          <span className="form-add__name">
            Add influenced authors (if any)
          </span>
          <select className="form-add__input" onChange={e => {selectHandler(e, "authors");}}>
            <Query query={getAuthorsQuery}>
              {({ loading, error, data }) => {
                if (loading) return <option disabled>Loading authors...</option>;
                return mapOptions(data.authors, influenceIds);
              }}
            </Query>
          </select>
        </label>
        {mapFromCache(influenceIds, client, "authors", style)}
        <label className="form-add__label">
          <span className="form-add__name">Add biography</span>
          <textarea
            className="form-add__input"
            name="biography"
            placeholder="enter biography"
            value={wrapProps.biography}
            onChange={e => {
              changeHandler(e);
            }}
          />
        </label>
        <button className="form-add__submit" onClick={e => {submitHandler(e);}}>
          {formType === "edit-author" ? "Edit" : "Create"} author
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
  graphql(addAuthorQuery, {
    name: "addAuthorQuery",
    options: {
      refetchQueries: [{
        query: getAuthorsQuery
      }]
    }
  }),
  graphql(updateAuthorQuery, {
    name: "updateAuthorQuery",
    options: {
      refetchQueries: [{
        query: getAuthorsQuery
      }]
    }
  })
)(WithCRU(withApollo(AuthorForm)));
