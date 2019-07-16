import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className = "">
        <h1 onClick = {() => this.props.onClick('main-page', {})} className={'main-title col-9 col-sm-9 col-lg-9 mt-3'}>
          <img className ={'logo'} src="https://pbs.twimg.com/profile_images/2153334389/Transparent_Logo.png" />
                Jewliqo</h1>

        <div className = "col-3 icons">
          <button onClick = {() => this.props.onClick('catalog', {})} className = "btn-back-details mr-4">Shop All</button>
          <h2 className = {' cart-icon'}><i onClick = {() => this.props.onClick('cart', {})}className="fas fa-shopping-bag "></i> {this.props.cartItemCount}</h2>
        </div>
      </div>
    );
  }
}
