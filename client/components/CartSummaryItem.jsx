import React from 'react';

export default class CartSummaryItem extends React.Component {
  render() {

    return (<div className="shopping-cart">
      <div className="item">

        <div className="image">
          <img src={this.props.product.image} />
        </div>
        <div className="description">
          <span>{this.props.product.name}</span>
        </div>
        <div className="quantity">
          <div>Quantity: {this.props.product.quantity}</div>
          <div className="total-price">${(this.props.product.price * 0.01).toFixed(2)}</div>
        </div>
        <div className="buttons">
          <button onClick={() => this.props.remove(this.props.product)} className="delete-btn btn ">X</button>
        </div>
      </div>
    </div>);

  }
}
