import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      creditCard: '',
      shippingAddress: ''
    };

  }

  render() {
    return (
      <div>
        <div className ={'pink-stripe'}></div>
        <div className = " col-12 mt-1">
          <h1 className={'main-title'}>
            <img className ={'logo'} src="https://pbs.twimg.com/profile_images/2153334389/Transparent_Logo.png" />
          </h1>
        </div>

        <div className ={'container'}>
          <div className ={'col-md-7 order-form form-group '}>
            <label > Contact information</label>
            <input className={'form-control'} type="email" placeholder={'Email'}/>
            <label > Shipping information</label>
            <input className ={'mb-2 form-control '} type="text" placeholder={'First name'}/>
            <input className ={'mb-2 form-control'} type="text" placeholder={'Last name'}/>
            <textarea className={'form-control'} type="text" placeholder={'Shipping Address'}/>
            <label > Payment information</label>
            <input className ={'mb-2 form-control'} type="text" placeholder={'Credit Card Number'}/>

            <button onClick ={() => this.props.click('catalog', {})} className = {'btn btn-link btn-back-details'}>Back to Catalog</button>
            <button onClick ={() => this.props.click('cart', {})} className = {'btn btn-link btn-back-details'}>Return to Cart</button>
          </div>
          <div className ={'col-md-4 order-summary '}>
            <label > Order Summary</label>
            {this.props.cart.map(product => (<div key={this.props.cart.id} className={'summary-items'}>{product.name}  ${(product.price * 0.01).toFixed(2)}</div>))}
            <h3 className={'summary-items'}> Subtotal: ${this.props.cart.reduce(function (accumulator, currentValue) {
              return (accumulator + (parseInt(currentValue.price) * 0.01));
            }, 0)}</h3>
            <button type={'submit'} onClick={() => this.props.onClick(this.state)} className ={'btn btn-cart'}>Place Order</button>
          </div>
        </div>

      </div>
    );

  }
}
