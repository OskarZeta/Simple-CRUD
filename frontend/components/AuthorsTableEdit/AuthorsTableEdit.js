import React from 'react';
import { Query } from "react-apollo";
import { getAuthorsQuery } from "../../queries/queries";
import style from "../../styles/table.js";
import EmptyTable from "../EmptyTable/EmptyTable";

const AuthorsTableEdit = ({ id }) => {
  return (
    <div className="table__wrapper table__wrapper--edit">
      <Query query={getAuthorsQuery}>
        {({ loading, error, data, client }) => {
          if (loading) return <div>Loading authors...</div>;
          if (error) return <div>Error! ${error.message}</div>;
          let source = data.authors.find(author => author.id === id);
          return (
            <table className="table">
              <tbody>
                <tr>
                  <th className="table__cell">Author name</th>
                  <th className="table__cell">Influenced authors</th>
                  <th className="table__cell">Genres</th>
                  <th className="table__cell">Books</th>
                </tr>
                {source.length === 0 ? <EmptyTable name="authors" size="4"/>:
                  <tr key={source.id}>
                    <td className="table__cell">{source.name}</td>
                    {source.influencedAuthors.length === 0 ?
                      <td className="table__cell">no influenced authors</td> :
                      <td className="table__cell">
                        <table>
                          <tbody>
                            {source.influencedAuthors.map(author => {
                              return (
                                <tr key={author.id}>
                                  <td>{author.name}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </td>
                    }
                    {source.genres.length === 0 ?
                      <td className="table__cell">no genres</td> :
                      <td className="table__cell">
                        <table>
                          <tbody>
                            {source.genres.map(genre => {
                              return (
                                <tr key={genre.id}>
                                  <td>{genre.name}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </td>
                    }
                    {source.books.length === 0 ?
                      <td className="table__cell">no books available</td> :
                      <td className="table__cell">
                        <table>
                          <tbody>
                            {source.books.map(book => {
                              return (
                                <tr key={book.id}>
                                  <td>{book.name}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </td>
                    }
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

export default AuthorsTableEdit;
