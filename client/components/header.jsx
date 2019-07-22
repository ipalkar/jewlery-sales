import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <a onClick = {() => this.props.onClick('main-page', {})} className="logo">jeweliqo</a>
        <div className="header-right">
          <a className ="shop-font" onClick = {() => this.props.onClick('catalog', {})}><i className="fas fa-gem gem-icon"></i> Shop</a>
          <a className ="shop-font" ><i onClick = {() => this.props.onClick('cart', {})} className="fas fa-shopping-bag mr-2 bag-font "></i >{this.props.cartItemCount}</a>
        </div>
      </div>
    );
  }
}
