import React from 'react';
import CartSummaryItem from './CartSummaryItem';

export default class CartSummary extends React.Component {
  render() {

    return (
      <div>
        <h1>My Cart</h1>
        <button onClick ={() => this.props.onClick('catalog', {})} className = {'btn btn-link'}>Back to Catalog</button>
        {this.props.cart.map(product => (<CartSummaryItem key = {product.id } product ={product}></CartSummaryItem>))}
        <h2> Item Total $</h2>
      </div>
    );

  }
}
