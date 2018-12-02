import React from 'react';
import { Query, graphql } from "react-apollo";
import { getGenresQuery, removeGenreQuery } from "../../queries/queries";
import style from "../../styles/table.js";
import Popup from "../Popup/Popup";
import GenreForm from "../GenreForm/GenreForm";
import WithDelete from "../WithDelete/WithDelete";
import EmptyTable from "../EmptyTable/EmptyTable";

const GenresTable = ({ mode, id, deleteHandler }) => {
  return (
    <div className="table__wrapper">
      <Query query={getGenresQuery}>
        {({ loading, error, data, client }) => {
          if (loading) return <div>Loading genres...</div>;
          if (error) return <div>Error! ${error.message}</div>;
          let source = [];
          if (mode !== "edit") {
            source = data.genres;
          } else {
            source.push(data.genres.find(genre => genre.id === id));
          }
          return (
            <table className="table">
              <tbody>
                <tr>
                  <th className="table__cell">Genre name</th>
                  <th className="table__cell">Related genres</th>
                  <th className="table__cell">Description</th>
                </tr>
                {source.length === 0 ? <EmptyTable name="genres" size="3"/> : source.map(genre => {
                  return (
                    <tr key={genre.id}>
                      <td className="table__cell">{genre.name}</td>
                      {genre.relatedGenres.length === 0 ? (
                        <td className="table__cell">no related genres</td>
                      ) : (
                        <td className="table__cell">
                          <table>
                            <tbody>
                              {genre.relatedGenres.map(relatedGenre => {
                                return (
                                  <tr key={relatedGenre.id}>
                                    <td>{relatedGenre.name}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </td>
                      )}
                      <td className="table__cell">{genre.description}</td>
                      {mode !== "edit" && (
                        <td className="table__cell">
                          <Popup trigger={<span>Edit</span>}>
                            <div>
                              <GenresTable mode="edit" id={genre.id} />
                              <GenreForm
                                formType="edit-genre"
                                defaultState={{
                                  id: genre.id,
                                  name: genre.name,
                                  genreIds: new Set(genre.relatedGenres.map(genre => genre.id)),
                                  description: genre.description
                                }}
                              />
                            </div>
                          </Popup>
                          <button onClick={(id, queryName) => {deleteHandler(genre.id, "removeGenreQuery");}}>
                            Delete
                          </button>
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
        }}
      </Query>
      <style jsx>{style}</style>
    </div>
  );
};

export default graphql(removeGenreQuery, {
  name: "removeGenreQuery",
  options: {
    refetchQueries: [{
      query: getGenresQuery
    }]
  }
})(WithDelete(GenresTable));
