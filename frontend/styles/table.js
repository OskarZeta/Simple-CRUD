import css from "styled-jsx/css";

export default css`
  ul {
    list-style-type: none;
  }
  th{
    text-align: left;
    font-size: 14px;
    padding: 5px;
    background: #e8eef4;
  }
  .table {
    border-collapse: collapse;
    width: 100%;
  }
  .table__wrapper {
    width: 95%;
    margin: 20px auto;
    padding: 0px 20px 30px 20px;
    border: 2px solid #6d86cd;
    border-radius: 10px;
    overflow-y: auto;
  }
  .table__wrapper--edit{
    width: 95%;
    margin: 20px auto;
    padding: 0;
    border: none;
    border-radius: 0;
    max-height: 50vh;
    overflow-y: auto;
  }
  .table__name{
    position: relative;
    top: 0px;
    left: -20px;
    margin: 0;
    padding: 10px 20px;
    width: calc(100% + 40px);
    font-size: 18px;
    background: #6d86cd;
    color: white;
  }
  .table__cell {
    border: 2px solid #cdd2d8;
    padding: 3px 5px;
  }
  .table__delete, .table__edit, .table__add{
    background: #dc3545;
    border: none;
    border-radius: 5px;
    width: 100%;
    color: white;
    padding: 4px 0;
    margin-top: 5px;
    font-size: 12px;
    cursor: pointer;
    transition: 0.2s;
  }
  .table__add{
    background: #4c6dcb;
    width: 100px;
    padding: 5px 0;
    margin: 10px 0;
  }
  .table__edit{
    background: #17a2b8;
    margin-top: 0;
    font-size: 12px;
  }
  .table__delete:hover, .table__edit:hover, .table__add:hover{
    opacity: 0.8;
  }
  .table__delete:active{
    background: #ad2936;
  }
  .table__edit:active{
    background: #0f7989;
  }
  .table__add:active{
    background: #3a56a7;
  }
`;
