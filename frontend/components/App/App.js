import React, { Component } from 'react';
import { BooksTable, BookForm, Header } from '../index';
//import { BooksTable, BookForm, Header } from '../../components/index';

// class App extends Component {
//   render() {
//     return (
//       <ApolloProvider client={client}>
//         <div>
//           <BooksTable />
//           <BookForm
//             formType="add-book"
//             defaultState={{
//               name: "",
//               authorId: "",
//               genreIds: new Set(),
//               description: ""
//             }}
//           />
//         </div>
//       </ApolloProvider>
//     );
//   }
// }
//
// export default App;

class App extends Component {
  render() {
    return (
      <div>
        <BooksTable />
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
    );
  }
}

export default App;
