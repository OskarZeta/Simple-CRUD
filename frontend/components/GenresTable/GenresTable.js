import React from 'react';
import { Query, graphql } from "react-apollo";
import { getGenresQuery, removeGenreQuery } from "../../queries/queries";
import style from "../../styles/table.js";
import Popup from "../Popup/Popup";
import GenreForm from "../GenreForm/GenreForm";
import GenresTableEdit from "../GenresTableEdit/GenresTableEdit";
import WithDelete from "../WithDelete/WithDelete";
import EmptyTable from "../EmptyTable/EmptyTable";

const GenresTable = ({ deleteHandler }) => {
  return (
    <div className="table__wrapper">
      <h2 className="table__name">Genres</h2>
      <Popup trigger={<button className="table__add">Add genre</button>}>
        <div>
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
      <Query query={getGenresQuery} fetchPolicy='network-only'>
        {({ loading, error, data, client }) => {
          if (loading) return <div>Loading genres...</div>;
          if (error) return <div>Error! ${error.message}</div>;
          let source = data.genres;
          return (
            <table className="table">
              <tbody>
                <tr>
                  <th className="table__cell">Genre name</th>
                  <th className="table__cell">Related genres</th>
                  <th className="table__cell">Description</th>
                  <th className="table__cell">Actions</th>
                </tr>
                {source.length === 0 ? <EmptyTable name="genres" size="4"/> : source.map(genre => {
                  return (
                    <tr key={genre.id}>
                      <td className="table__cell">{genre.name}</td>
                      {genre.relatedGenres.length === 0 ?
                        <td className="table__cell">no related genres</td> :
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
                      }
                      <td className="table__cell">{genre.description}</td>
                      <td className="table__cell">
                        <Popup trigger={<button className="table__edit">Edit</button>}>
                          <div>
                            <GenresTableEdit id={genre.id} />
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
                        <button className="table__delete" onClick={(id, queryName) => {deleteHandler(genre.id, "removeGenreQuery");}}>
                          <span>Delete</span>
                        </button>
                      </td>
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
