import React from 'react';
import Header from './header';
import ProductList from './product-list';

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div className ={'pink-stripe'}></div>
        <div>
          <Header onClick = {this.props.onClick} cartItemCount ={this.props.cartItemCount}></Header>
        </div>
        <div>
          <img className = "hero-image mt-2" src="https://cdn.shopify.com/s/files/1/1770/7639/files/slidersxArtboard_1_1920x700.jpg?v=1558492525" alt=""/>
        </div>
        <div className = 'container'>
          <div className = "best-sellers mt-4">Shop Our Best Sellers</div>
          <div className = "d-flex justify-content-around">

            <div className = 'row '>
              <ProductList onClick = {this.props.onClick} products = {this.props.products}></ProductList>
            </div>
          </div>
        </div>
      </div>
    );

  }
}
