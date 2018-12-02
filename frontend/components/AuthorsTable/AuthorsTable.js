import React from 'react';
import { Query, graphql } from "react-apollo";
import { getAuthorsQuery, removeAuthorQuery } from "../../queries/queries";
import style from "../../styles/table.js";
import Popup from "../Popup/Popup";
import AuthorForm from "../AuthorForm/AuthorForm";
import WithDelete from "../WithDelete/WithDelete";
import EmptyTable from "../EmptyTable/EmptyTable";

const AuthorsTable = ({ mode, id, deleteHandler }) => {
  return (
    <div className="table__wrapper">
      <Query query={getAuthorsQuery}>
        {({ loading, error, data, client }) => {
          if (loading) return <div>Loading authors...</div>;
          if (error) return <div>Error! ${error.message}</div>;
          let source = [];
          if (mode !== "edit") {
            source = data.authors;
          } else {
            source.push(data.authors.find(author => author.id === id));
          }
          return (
            <table className="table">
              <tbody>
                <tr>
                  <th className="table__cell">Author name</th>
                  <th className="table__cell">Influenced authors</th>
                  <th className="table__cell">Genres</th>
                  <th className="table__cell">Books</th>
                </tr>
                {source.length === 0 ? <EmptyTable name="authors" size="4"/>: source.map(author => {
                  return (
                    <tr key={author.id}>
                      <td className="table__cell">{author.name}</td>
                      {author.influencedAuthors.length === 0 ? (
                        <td className="table__cell">no influenced authors</td>
                      ) : (
                        <td className="table__cell">
                          <table>
                            <tbody>
                              {author.influencedAuthors.map(author => {
                                return (
                                  <tr key={author.id}>
                                    <td>{author.name}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </td>
                      )}
                      {author.genres.length === 0 ? (
                        <td className="table__cell">no genres</td>
                      ) : (
                        <td className="table__cell">
                          <table>
                            <tbody>
                              {author.genres.map(genre => {
                                return (
                                  <tr key={genre.id}>
                                    <td>{genre.name}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </td>
                      )}
                      {author.books.length === 0 ? (
                        <td className="table__cell">no books available</td>
                      ) : (
                        <td className="table__cell">
                          <table>
                            <tbody>
                              {author.books.map(book => {
                                return (
                                  <tr key={book.id}>
                                    <td>{book.name}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </td>
                      )}
                      {mode !== "edit" && (
                        <td className="table__cell">
                          <Popup trigger={<span>Edit</span>}>
                            <div>
                              <AuthorsTable mode="edit" id={author.id} />
                              <AuthorForm
                                formType="edit-author"
                                defaultState={{
                                  id: author.id,
                                  name: author.name,
                                  born: author.born,
                                  died: author.died,
                                  birthplace: author.birthplace,
                                  genreIds: new Set(author.genres.map(genre => genre.id)),
                                  influenceIds: new Set(
                                    author.influencedAuthors.map(author => author.id)
                                  ),
                                  biography: author.biography
                                }}
                              />
                            </div>
                          </Popup>
                          <button onClick={(id, queryName) => {deleteHandler(author.id, "removeAuthorQuery");}}>
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

export default graphql(removeAuthorQuery, {
  name: "removeAuthorQuery",
  options: {
    refetchQueries: [{
      query: getAuthorsQuery
    }]
  }
})(WithDelete(AuthorsTable));
