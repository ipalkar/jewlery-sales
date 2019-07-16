import React from 'react';
import ProductListItem from './product-list-item';

export default class BestSellers extends React.Component {

  render() {
    return (
      <div className = {' d-flex justify-content-around flex-wrap'}>
        {this.props.products.map(product => (
          <ProductListItem addToCart ={this.props.addToCart} click = {this.props.onClick} key ={product.id} products = {product}></ProductListItem>
        ))}
      </div>
    );
  }
}
