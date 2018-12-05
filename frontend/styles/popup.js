import css from "styled-jsx/css";

export default css`
  .popup{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
  }
  .popup__wrapper{
    background: white;
    margin: auto;
    min-width: 600px;
    width: 80%;
    border-radius: 5px;
  }
  .popup__btn{
    background: #17a2b8;
    border: none;
    border-radius: 5px;
    width: 100%;
    color: white;
    padding: 4px 0;
    font-size: 12px;
  }
`;
