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
  .form-add__selected {
    margin-left: calc(25% + 10px);
  }
  .form-add__submit {
    width: 160px;
    height: 30px;
    cursor: pointer;
  }
  textarea {
    min-height: 100px;
    resize: none;
  }
`;
