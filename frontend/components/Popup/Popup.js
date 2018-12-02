import React, { Component } from 'react';
import style from '../../styles/popup';

class Popup extends Component {
  state = { isOpen: false };
  clickHandler(e){
    if (e) {
      if (e.target.classList.contains('popup')){
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
    return(
      <div>
        <button onClick={() => {this.clickHandler()}}>
          {this.props.trigger}
        </button>
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
