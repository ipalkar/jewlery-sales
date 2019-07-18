import React from 'react';

export default class CartSummaryItem extends React.Component {
  render() {

    return (
        <div className={"cart-summary-item"}>
          <div className ={"cart-details-container"}>
            <div className ={"cart-item-image"}>
              <img className ="cart-small-img" src={this.props.product.image}  alt=""/>
            </div>
            <div>
              <p>{this.props.product.name}</p>
              <div onClick={() => this.props.remove(this.props.product)} className = "cart-item-remove">Remove</div>
            </div>
          </div>
            <div className ="cart-item-price">${((this.props.product.price * 0.01)/this.props.product.quantity).toFixed(2)}</div>
            <div className ="cart-item-quantity">{this.props.product.quantity}</div>
            <div className={"cart-item-total"}>${(this.props.product.price * 0.01).toFixed(2)}</div>
        </div>

    );

  }
}
