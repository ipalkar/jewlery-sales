import React from 'react';
import CartSummaryItem from './CartSummaryItem';

export default class CartSummary extends React.Component {
  render() {

    return (
      <div>
        <div className ={'pink-stripe'}></div>
        <div className ={'container'}>
          <header>
            <h3 className= {'cart-header'}>My Cart</h3>
            <button onClick ={() => this.props.onClick('catalog', {})} className = {'btn btn-link'}>Back to Catalog</button>
          </header>
          {this.props.cart.map(product => (<CartSummaryItem key = {product.id } product ={product}></CartSummaryItem>))}
          <h3> Subtotal: ${this.props.cart.reduce(function (accumulator, currentValue) {
            return (accumulator + (parseInt(currentValue.price) * 0.01));
          }, 0)}</h3>
        </div>
      </div>
    );

  }
}
