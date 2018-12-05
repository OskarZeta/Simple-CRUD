import React from 'react';
import { Query } from "react-apollo";
import { getGenresQuery } from "../../queries/queries";
import style from "../../styles/table.js";
import EmptyTable from "../EmptyTable/EmptyTable";

const GenresTableEdit = ({ id }) => {
  return (
    <div className="table__wrapper table__wrapper--edit">
      <Query query={getGenresQuery}>
        {({ loading, error, data, client }) => {
          if (loading) return <div>Loading genres...</div>;
          if (error) return <div>Error! ${error.message}</div>;
          let source = data.genres.find(genre => genre.id === id);
          return (
            <table className="table">
              <tbody>
                <tr>
                  <th className="table__cell">Genre name</th>
                  <th className="table__cell">Related genres</th>
                  <th className="table__cell">Description</th>
                </tr>
                {source.length === 0 ?
                  <EmptyTable name="genres" size="3"/> :
                  <tr key={source.id}>
                    <td className="table__cell">{source.name}</td>
                    {source.relatedGenres.length === 0 ?
                      <td className="table__cell">no related genres</td> :
                      <td className="table__cell">
                        <table>
                          <tbody>
                            {source.relatedGenres.map(relatedGenre => {
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
                    <td className="table__cell">{source.description}</td>
                  </tr>
                }
              </tbody>
            </table>
          );
        }}
      </Query>
      <style jsx>{style}</style>
    </div>
  );
};

export default GenresTableEdit;
