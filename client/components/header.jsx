import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className = " col-12 mt-1">
        <h1 className={'main-title'}>Wicked Sales</h1>
        <h2><i onClick = {() => this.props.onClick('cart', {})}className="fas fa-shopping-cart"></i> {this.props.cartItemCount}</h2>
      </div>
    );
  }
}
