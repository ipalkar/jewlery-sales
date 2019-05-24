import React from 'react';

export default class ThankYou extends React.Component {
  render() {
    return (
      <div>
        <div className ={'pink-stripe'}></div>
        <button onClick ={() => this.props.onClick('catalog', {})} className = {'btn btn-link btn-back-details'}>Back to Catalog</button>
        <div className ={'thanks'}>Thank you! Your order has been placed!</div>
        <img className ={'img-last'} src="https://pbs.twimg.com/profile_images/2153334389/Transparent_Logo.png" />
      </div>
    );
  }
}
