import React from 'react';
import { Query, graphql, withApollo } from "react-apollo";
import { getBooksQuery, removeBookQuery } from "../../queries/queries";
import style from "../../styles/table.js";
import Popup from "../Popup/Popup";
import BookForm from "../BookForm/BookForm";
import BooksTableEdit from "../BooksTableEdit/BooksTableEdit";
import WithDelete from "../WithDelete/WithDelete";
import EmptyTable from "../EmptyTable/EmptyTable";

const BooksTable = ({ deleteHandler }) => {
  return (
    <div className="table__wrapper">
      <h2 className="table__name">Books</h2>
      <Popup trigger={<button className="table__add">Add book</button>}>
        <div>
          <BookForm
            formType="add-book"
            defaultState={{
              name: "",
              authorId: "",
              genreIds: new Set(),
              description: ""
            }}
          />
        </div>
      </Popup>
      <Query query={getBooksQuery} fetchPolicy='network-only'>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading books...</div>;
          if (error) return <div>Error! ${error.message}</div>;
          let source = data.books;
          return (
            <table className="table">
              <tbody>
                <tr>
                  <th className="table__cell">Book name</th>
                  <th className="table__cell">Author name</th>
                  <th className="table__cell">Genres</th>
                  <th className="table__cell">Actions</th>
                </tr>
                {source.length === 0 ?
                  <EmptyTable name="books" size="4"/> : source.map(book => {
                  return (
                    <tr className="table__content" key={book.id}>
                      <td className="table__cell">{book.name}</td>
                      <td className="table__cell">{book.author.name}</td>
                      {book.genres.length === 0 ?
                        <td>no genres</td> :
                        <td className="table__cell">
                          <table>
                            <tbody>
                              {book.genres.map(genre => {
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
                      <td className="table__cell">
                        <Popup trigger={<button className="table__edit">Edit</button>}>
                          <div>
                            <BooksTableEdit id={book.id}/>
                            <BookForm
                              formType="edit-book"
                              defaultState={{
                                id: book.id,
                                name: book.name,
                                authorId: book.author.id,
                                genreIds: new Set(book.genres.map(genre => genre.id)),
                                description: book.description
                              }}
                            ></BookForm>
                          </div>
                        </Popup>
                        <button className="table__delete" onClick={(id, queryName) => {deleteHandler(book.id, "removeBookQuery");}}>
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

export default graphql(removeBookQuery, {
  name: "removeBookQuery",
  options: {
    refetchQueries: [{
      query: getBooksQuery
    }]
  }
})(WithDelete(BooksTable));
