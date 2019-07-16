import React from 'react';
import Header from './header';
import BestSellers from './best-sellers';

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div className ={'pink-stripe'}>40% OFF YOUR ENTIRE ORDER WITH CODE PARTY40 AT CHECKOUT</div>
        <div>
          <Header onClick = {this.props.onClick} cartItemCount ={this.props.cartItemCount}></Header>
        </div>
        <div>
          <img className = "hero-image mt-2" src="/images/hero.jpeg" alt=""/>
        </div>
        <div className = 'container'>
          <div className = "best-sellers mt-4">Shop Our Best Sellers</div>
          <div className = "d-flex justify-content-around">

            <div className = 'row '>
              <BestSellers addToCart ={this.props.addToCart} onClick = {this.props.onClick} products = {this.props.products}></BestSellers>
            </div>
          </div>
        </div>
      </div>
    );

  }
}
