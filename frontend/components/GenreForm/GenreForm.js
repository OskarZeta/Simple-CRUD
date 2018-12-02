import React from 'react';
import { Query } from "react-apollo";
import { graphql, compose, withApollo } from "react-apollo";
import {
  addGenreQuery,
  updateGenreQuery,
  getGenresQuery
} from "../../queries/queries";
import WithCRU from "../WithCRU/WithCRU";
import style from "../../styles/form_add.js";

const GenreForm = ({
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
  return (
    <div>
      <section className="form-add">
        <label className="form-add__label">
          <span className="form-add__name">Add genre</span>
          <input
            className="form-add__input"
            type="text"
            name="name"
            placeholder="enter name"
            value={wrapProps.name}
            onChange={e => {
              changeHandler(e);
            }}
          />
        </label>
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
        <label className="form-add__label">
          <span className="form-add__name">Add related genres (if any)</span>
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
        <button className="form-add__submit" onClick={e => {submitHandler(e);}}>
          {formType === "edit-genre" ? "Edit" : "Create"} genre
        </button>
      </section>
      <style jsx>{style}</style>
    </div>
  );
};

export default compose(
  withApollo,
  graphql(getGenresQuery, { name: "getGenresQuery" }),
  graphql(addGenreQuery, {
    name: "addGenreQuery",
    options: {
      refetchQueries: [{
        query: getGenresQuery
      }]
    }
  }),
  graphql(updateGenreQuery, {
    name: "updateGenreQuery",
    options: {
      refetchQueries: [{
        query: getGenresQuery
      }]
    }
  })
)(WithCRU(withApollo(GenreForm)));
