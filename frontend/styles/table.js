import css from "styled-jsx/css";

export default css`
  ul {
    list-style-type: none;
  }
  .table {
    border-collapse: collapse;
    margin: 20px auto;
    width: 90%;
  }
  .table__wrapper {
    max-height: 50vh;
    overflow-y: auto;
  }
  .table__cell {
    border: 1px solid black;
  }
`;
