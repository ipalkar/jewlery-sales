import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className = "row">
        <h1 className={'main-title col-9 col-sm-9 col-lg-9 mt-3'}>
          <img className ={'logo'} src="https://pbs.twimg.com/profile_images/2153334389/Transparent_Logo.png" />
            Wicked Sales</h1>
        <h2 className = {' col-3 shopping-cart cart-icon'}><i onClick = {() => this.props.onClick('cart', {})}className="fas fa-shopping-bag "></i> {this.props.cartItemCount}</h2>
      </div>
    );
  }
}
