import React, { Component } from "react";

const WithCRU = FormComponent =>
  class extends Component {
    state = this.props.defaultState;
    selectHandler(e, fields) {
      if (e.target.value !== "") {
        let array;
        switch (fields) {
          case "authors":
            array = new Set(this.state.influenceIds);
            array.add(e.target.value);
            this.setState({
              influenceIds: array
            });
            break;
          case "author":
            array = e.target.value;
            this.setState({
              authorId: array
            });
            break;
          case "genres":
            array = new Set(this.state.genreIds);
            array.add(e.target.value);
            this.setState({
              genreIds: array
            });
            break;
          default:
            throw new Error("wrong fields type");
        }
      }
    }
    mapFromCache(ids, client, type, style) {
      let dataType;
      switch (type) {
        case "authors":
        case "author":
          dataType = "Author";
          break;
        case "genres":
          dataType = "Genre";
          break;
        case "books":
          dataType = "Book";
          break;
      }
      return (
        <div>
          {(ids.length === 0 || ids[0].length === 0) ?
            <div className="form-add__selected">No {type}</div> :
            <ul className="form-add__selected">
              {ids.map(id => {
                if (id.length > 0) {
                  let data = client.cache.data.data[`${dataType}:${id}`];
                  return (
                    <li key={id}>
                      <span className="form-add__selected-item" onClick={() => this.clickHandler(id, type)}>{data.name}</span>
                    </li>
                  );
                } else return <div key={id}>No {type} selected</div>;
              })}
            </ul>
          }
          <style jsx>{style}</style>
        </div>
      );
    }
    mapOptions(dataArray, idsArray){
      if (idsArray.length && idsArray[0]){
        let sortedArray = dataArray.slice(0);
        sortedArray.sort(el => {
          if (!!idsArray.find(id => el.id === id)) {
            return -1;
          } else return 1;
        });
        return sortedArray.map(el =>
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        );
      } else {
        return (
          <>
            <option value="">make selection</option>
            {dataArray.map(el =>
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            )}
          </>
        );
      }
    }
    clickHandler(id, fields) {
      let array;
      switch (fields) {
        case "authors":
          array = new Set(this.state.influenceIds);
          array.delete(id);
          this.setState({
            influenceIds: array
          });
          break;
        case "author":
          this.setState({
            authorId: ""
          });
          break;
        case "genres":
          array = new Set(this.state.genreIds);
          array.delete(id);
          this.setState({
            genreIds: array
          });
          break;
        default:
          throw new Error("wrong fields type");
      }
    }
    changeHandler(e) {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
        let stateObj = {};
        stateObj[e.target.name] = e.target.value;
        this.setState(stateObj);
      }
    }
    _fieldsCheck(type){
      switch (type) {
        case "book":
          if (!this.state.name.trim()) {
            alert('Enter name');
          } else if (!this.state.authorId) {
            alert('Enter author');
          } else if (this.state.genreIds.size === 0){
            alert('Select genres');
          } else return true;
          break;
        case "author":
        case "genre":
          if (!this.state.name.trim()) {
            alert('Enter name');
          } else return true;
          break;
        default:
          throw new Error('Wrong data type');
      }
    }
    submitHandler(e) {
      e.preventDefault();
      switch (this.props.formType) {
        case "add-genre":
          if (this._fieldsCheck("genre")) {
            this.props.addGenreQuery({
              variables: {
                name: this.state.name,
                description: this.state.description,
                relatedGenreIds: Array.from(this.state.genreIds)
              }
            });
            this.setState({
              ...this.props.defaultState
            });
          }
          break;
        case "edit-genre":
          if (this._fieldsCheck("genre")) {
            this.props.updateGenreQuery({
              variables: {
                id: this.state.id,
                name: this.state.name,
                description: this.state.description,
                relatedGenreIds: Array.from(this.state.genreIds)
              }
            });
          }
          break;
        case "add-author":
          if (this._fieldsCheck("author")) {
            this.props.addAuthorQuery({
              variables: {
                name: this.state.name,
                genreIds: Array.from(this.state.genreIds),
                influenceIds: Array.from(this.state.influenceIds),
                biography: this.state.biography
              }
            });
            this.setState({
              ...this.props.defaultState
            });
          }
          break;
        case "edit-author":
          if (this._fieldsCheck("author")) {
            this.props.updateAuthorQuery({
              variables: {
                id: this.state.id,
                name: this.state.name,
                genreIds: Array.from(this.state.genreIds),
                influenceIds: Array.from(this.state.influenceIds),
                biography: this.state.biography
              }
            });
          }
          break;
        case "add-book":
          if (this._fieldsCheck("book")) {
            this.props.addBookQuery({
              variables: {
                name: this.state.name,
                authorId: this.state.authorId,
                genreIds: Array.from(this.state.genreIds),
                description: this.state.description
              }
            });
            this.setState({
              ...this.props.defaultState
            });
          }
          break;
        case "edit-book":
          if (this._fieldsCheck("book")) {
            this.props.updateBookQuery({
              variables: {
                id: this.state.id,
                name: this.state.name,
                authorId: this.state.authorId,
                genreIds: Array.from(this.state.genreIds),
                description: this.state.description
              }
            });
          }
          break;
        default:
          throw new Error("wrong form type!");
      }
    }
    render() {
      return (
        <FormComponent
          selectHandler={(e, fields) => {
            return this.selectHandler(e, fields);
          }}
          clickHandler={(id, fields) => {
            return this.clickHandler(id, fields);
          }}
          changeHandler={e => {
            return this.changeHandler(e);
          }}
          submitHandler={e => {
            return this.submitHandler(e);
          }}
          mapFromCache={(ids, client, type, style) => {
            return this.mapFromCache(ids, client, type, style);
          }}
          mapOptions={this.mapOptions}
          wrapProps={this.state}
          formType={this.props.formType}
        />
      );
    }
  };

export default WithCRU;
