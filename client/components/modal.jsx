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

              <label className ="qty-label qty-font mr-2" htmlFor="quantity">Qty: </label>
              <select className ="mr-3 qty-font" id="quantity" name="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="7">8</option>
                <option value="7">9</option>
                <option value="7">10</option>
              </select>

              <button onClick ={() => this.props.addToCart(this.props.product)} className ="btn btn-cart">Add to Cart</button>
              <button onClick = {() => this.props.showFullDetails('details', {}, this.props.id)} className = "btn btn-link full-details">View Full Details</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
