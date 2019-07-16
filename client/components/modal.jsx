import React from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleCloseModal(event) {
    event.target.classList[0] === 'custom-modal' && this.props.closeModal();
    event.target.classList[0] === 'close-icon' && this.props.closeModal();

  }

  render() {
    return (
      <div className="custom-modal" onClick={this.handleCloseModal} >
        <div className="custom-modal-dialog modal-fade animate-top">
          <div className="close-icon font-weight-bold" onClick={this.props.closeModal}> ✖ </div>
          <div className="">
            <img className ="modal-img ml-4" src={this.props.image} />
            <div className ="modal-details ml-3">
              <div>{this.props.name}</div>
              <div className ="mb-2">${(this.props.price * 0.01).toFixed(2) }</div>
              <button onClick ={() => this.props.addToCart(this.props.product)} className ="btn btn-cart">Add to Cart</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
