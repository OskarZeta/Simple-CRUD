import React, { Component } from 'react';
import style from '../../styles/popup';

class Popup extends Component {
  state = { isOpen: false };
  clickHandler(e){
    if (e) {
      e.preventDefault();
      if (e.target.classList.contains('popup') || e.target.classList.contains('form-add__close')){
        e.stopPropagation();
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    } else {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }
  render(){
    //className="popup__btn"
    return(
      <div>
        <div onClick={() => {this.clickHandler()}}>
          {this.props.trigger}
        </div>
        {this.state.isOpen &&
          <div className="popup" onClick={(e) => {this.clickHandler(e)}}>
            <div className="popup__wrapper">
              {this.props.children}
            </div>
          </div>
        }
        <style jsx>{style}</style>
      </div>
    );
  }
};

export default Popup;
