import React from 'react';

export default class CartSummaryItem extends React.Component {
  render() {
    return (
      <div className = ' cart-item col-lg-8 col-sm-8 col-xs-8'>
        <div className = {'col-xs-3 col-sm-3 col-lg-3 cart-img'}>
          <img className = {'cart-img-height mb-5'}src={this.props.product.image} />
        </div>
        <div className ={'col-sm-4 col-lg-4 col-xs-4 cart-details mt-2 ml-5'}>
          <h5 className ={'mt-3'} >{this.props.product.name}</h5>
          <div>${(this.props.product.price * 0.01).toFixed(2)}</div>
          <p>{this.props.product.shortDescription}</p>
          <div>Quantity: {this.props.product.quantity}</div>
          <button onClick={() => this.props.remove(this.props.product)} className ={'btn btn-cart'}>Remove</button>
        </div>
      </div>);

  }
}
