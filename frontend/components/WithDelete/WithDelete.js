import React, { Component } from "react";

const WithDelete = ButtonComponent =>
  class extends Component {
    deleteHandler(id, queryName) {
      const query = this.props[queryName];
      const modal = window.confirm("Are you sure?");
      if (modal) {
        query({
          variables: {
            id: id
          }
        });
      }
    }
    render() {
      return (
        <ButtonComponent
          deleteHandler={(id, queryName) => {
            this.deleteHandler(id, queryName);
          }}
        />
      );
    }
  };

export default WithDelete;
