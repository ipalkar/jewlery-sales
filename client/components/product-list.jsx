import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {

  render() {
    return (
      <div>
        <div className = "best-sellers">All Products</div>
        <div className = {' d-flex justify-content-around flex-wrap'}>
          {this.props.products.map(product => (
            <ProductListItem click = {this.props.onClick} key ={product.id} products = {product}></ProductListItem>
          ))}
        </div>

      </div>
    );
  }
}
