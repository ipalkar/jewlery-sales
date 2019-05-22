import React from 'react';

export default class CartSummaryItem extends React.Component {
  render() {
    return (
      <div className = 'container cart-item col-8'>
        <div className = {'col-3 cart-img'}>
          <img src={this.props.product.image} />
        </div>
        <div className ={'col-4 cart-details mt-2'} >
          <h5 >{this.props.product.name}</h5>
          <div>${this.props.product.price}</div>
          <p> {this.props.product.shortDescription}</p>
        </div>
      </div>);

  }
}
