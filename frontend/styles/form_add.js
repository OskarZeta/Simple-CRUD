import css from "styled-jsx/css";

export default css`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .form-add {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 20px auto;
    font-size: 14px;
  }
  .form-add__label {
    display: flex;
    margin-bottom: 10px;
  }
  .form-add__name {
    width: 25%;
    margin-right: 10px;
  }
  .form-add__input {
    flex-grow: 2;
  }
  select.form-add__input{
    border: 1px solid black;
    transition: 0.1s;
    cursor: pointer;
  }
  select.form-add__input:hover{
    border: 1px solid grey;
  }
  .form-add__selected {
    margin-left: calc(25% + 10px);
    margin-bottom: 10px;
    display: flex;
  }
  .form-add__selected-item{
    display: inline-block;
    background: #48b3f7;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    padding: 2px 8px;
    margin: 2px;
    cursor: pointer;
    transition: 0.2s;
  }
  .form-add__selected-item:hover{
    background: #2891d4;
  }
  .form-add__btns {
    display: flex;
    justify-content: space-between;
  }
  .form-add__submit, .form-add__close {
    width: 160px;
    height: 30px;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    transition: 0.2s;
  }
  .form-add__submit{
    background: #28a745;
  }
  .form-add__submit:hover{
    background: #2dbe4e;
  }
  .form-add__submit:active{
    background: #218b39;
  }
  .form-add__close{
    background: #dc3545;
  }
  .form-add__close:hover{
    background: #fb3a4c;
  }
  .form-add__close:active{
    background: #c62f3e;
  }
  textarea {
    min-height: 100px;
    resize: none;
  }
  .form-add__link{
    margin-left: 5px;
  }
`;
