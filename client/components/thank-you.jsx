import React from 'react';
import Header from './header';

export default class ThankYou extends React.Component {
  render() {
    return (
      <div>
        <div className ={'pink-stripe'}></div>
        <Header onClick ={this.props.onClick} cartItemCount = {this.props.cartItemCount}></Header>
        <div className ={'thanks'}>Thank you! Your order has been placed!</div>
        <img className ={'img-last'} src="https://pbs.twimg.com/profile_images/2153334389/Transparent_Logo.png" />
      </div>
    );
  }
}
