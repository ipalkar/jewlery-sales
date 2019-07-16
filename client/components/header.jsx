import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className = "jeweliqo-header">
        <div>
          <div onClick = {() => this.props.onClick('main-page', {})} className={'main-title col-9 col-sm-9 col-lg-9 mt-3'}>
            <img className ={'logo ml-2'} src="/images/jeweliqo-logo-2.png" />
          </div>

          {/* <div className ="center-text"> */}
          {/* <div>Shop All</div> */}
          {/* <div>About</div> */}
          {/* </div> */}

          <div className = "col-3 icons">
            <button onClick = {() => this.props.onClick('catalog', {})} className = "btn-back-details mr-4">Shop All</button>
            <h2 className = {' cart-icon'}><i onClick = {() => this.props.onClick('cart', {})}className="fas fa-shopping-bag "></i> {this.props.cartItemCount}</h2>
          </div>
        </div>

      </div>
    );
  }
}
