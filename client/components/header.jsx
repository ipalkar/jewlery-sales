import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className = " col-12 mt-1">
        <h1 >Wicked Sales</h1>
        <h2>Items in cart: {this.props.cartItemCount}</h2>
      </div>
    );
  }
}
