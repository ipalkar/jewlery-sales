import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (

      <div className="header">
        <Link className="logo" to = '/'>
          <span onClick = {() => this.props.onClick('main-page', {})} >jeweliqo</span>
        </Link>

        <div className="header-right">

          <Link to ="/catalog">
            <span className ="shop-font" onClick = {() => this.props.onClick('catalog', {})}><i className="fas fa-gem gem-icon"></i> Shop</span>
          </Link>

          <Link to = "/cart-summary">
            <span className ="shop-font" ><i onClick = {() => this.props.onClick('cart', {})} className="fas fa-shopping-bag mr-2 bag-font "></i >{this.props.cartItemCount}</span>
          </Link>

        </div>
      </div>

    );
  }
}
