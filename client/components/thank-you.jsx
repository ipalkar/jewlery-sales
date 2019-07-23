import React from 'react';
import Header from './header';

export default class ThankYou extends React.Component {

  render() {
    let discount;
    if (!(this.props.orderHistory.discount === null)) {
      discount = <div className={'mb-2 total-conf conf-size'}>Discount : -${this.props.orderHistory.discount}</div>;
    }
    return (
      <div>
        <div className ={'pink-stripe'}></div>
        <Header onClick ={this.props.onClick} cartItemCount = {this.props.cartItemCount}></Header>
        <div className ="container order-conf">
          <div className={'mb-2 conf-size'}>Order Confirmation</div>
          <div className={'mb-2'}>Hey {this.props.orderHistory.name}, thank you for your order! We are so appreciative of your business! </div>
          <div className ="conf-style conf-size">Items Ordered</div>
          {this.props.orderHistory.cart.map(product => (
            <div key = {product.id}className={'cart-summary-item'}>
              <div className ={'cart-details-container'}>
                <div className ={'cart-item-image'}>
                  <img className ="cart-small-img" src={product.image} alt=""/>
                </div>
                <div>
                  <p>{product.name}</p>
                </div>
              </div>
              <div className ="cart-item-quantity">x{product.quantity}</div>
              <div className={'cart-item-total '}>${(product.price * 0.01).toFixed(2)}</div>
            </div>))}

          <div>
            <div className={'mb-2 total-conf conf-size'}>Subtotal : ${this.props.orderHistory.subtotal}</div>
            <div className={'mb-2 total-conf conf-size'}>Shipping : FREE</div>
            {discount}
            <div className={'mb-2 total-conf conf-size'}>Total : ${this.props.orderHistory.total}</div>
          </div>

          <div>
            <div className={'ship-conf mb-2'}>
              <div className={'mb-2 conf-size'} >Shipping information</div>
              <div>{this.props.orderHistory.name}</div>
              <div>{this.props.orderHistory.address} </div>
              <div>{this.props.orderHistory.city}, {this.props.orderHistory.state} {this.props.orderHistory.zip}</div>
              <div>{this.props.orderHistory.country}</div>
              <div>{this.props.orderHistory.email}</div>
            </div>

            <div className ="payment-conf">
              <div className={'mb-2 conf-size'}>Payment Information</div>
              <div>{this.props.orderHistory.nameOnCard}</div>
              <div>●●●●●●●●●●●●{this.props.orderHistory.cardNum.slice(-4)}</div>
            </div>

          </div>

          <div className ="empty-style mt-2 btn-conf">
            <button onClick={() => this.props.onClick('catalog', {})} className ="btn btn-link pink">Click here to continue shopping</button>
          </div>

        </div>

      </div>
    );
  }
}
