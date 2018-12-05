import React from 'react';
import { Query } from "react-apollo";
import { getBooksQuery } from "../../queries/queries";
import style from "../../styles/table.js";
import EmptyTable from "../EmptyTable/EmptyTable";

const BooksTableEdit = ({ id }) => {
  return (
    <div className="table__wrapper table__wrapper--edit">
      <Query query={getBooksQuery}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading books...</div>;
          if (error) return <div>Error! ${error.message}</div>;
          let source = data.books.find(book => book.id === id);
          return (
            <table className="table">
              <tbody>
                <tr>
                  <th className="table__cell">Book name</th>
                  <th className="table__cell">Author name</th>
                  <th className="table__cell">Genres</th>
                </tr>
                {source.length === 0 ?
                  <EmptyTable name="books" size="3"/> :
                    <tr className="table__content" key={source.id}>
                      <td className="table__cell">{source.name}</td>
                      <td className="table__cell">{source.author.name}</td>
                      {source.genres.length === 0 ?
                        <td>no genres</td> :
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

export default BooksTableEdit;
