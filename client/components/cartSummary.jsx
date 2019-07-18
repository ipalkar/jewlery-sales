import React from 'react';
import CartSummaryItem from './CartSummaryItem';
import Header from './header';

export default class CartSummary extends React.Component {
  render() {
    if (this.props.cart.length === 0) {
      return (
          <div>
              <div className ={'pink-stripe'}>40% OFF YOUR ENTIRE ORDER WITH CODE PARTY40 AT CHECKOUT</div>

              <Header cartItemCount ={this.props.cartItemCount} onClick = {this.props.onClick} ></Header>

              <div className ="cart-empty">
                    Your cart is currently empty
              </div>
              </div>
      );
    }

    return (
      <div>
        <div className ={'pink-stripe'}>40% OFF YOUR ENTIRE ORDER WITH CODE PARTY40 AT CHECKOUT</div>
         <Header cartItemCount ={this.props.cartItemCount} onClick = {this.props.onClick} ></Header>
            <div className ="full-cart-summary">
                <div className = "cart-items-container">
                    <div className ="cart-summary-item">
                        <div className ="cart-details-container">Product</div>
                        <div className={"cart-item-price"}>Price</div>
                        <div className ="cart-item-quantity">Quantity</div>
                        <div className={"cart-item-total"}>Total</div>
                    </div>
                    {this.props.cart.map(product => (<CartSummaryItem remove ={this.props.remove} key = {product.id } product ={product}></CartSummaryItem>))}
                </div>

                <div className = "right-cart mt-3">
                    <div className ="subtotal-cart"> Subtotal: ${this.props.cart.reduce(function (accumulator, currentValue) {
                        return (accumulator + (parseInt(currentValue.price) * 0.01));
                    }, 0)}.00</div>

                    <button onClick={() => this.props.onClick('checkout', {})} className ={'btn btn-cart mt-2'}>Checkout</button>
                </div>

            </div>
      </div>
    );

  }
}
