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
import LinkCustom from "../LinkCustom/LinkCustom";
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
          <span className="form-add__name">Genres</span>
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
          <span className="form-add__name">
            Influenced authors
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
        <div className="form-add__btns">
          <button className="form-add__submit" onClick={e => {submitHandler(e);}}>
            {formType === "edit-author" ? "Save changes" : "Create author"}
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
