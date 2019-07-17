import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      creditCard: '',
      shippingAddress: '',
      code: ' ',
      subtotal: null,
      discount: null,
      total: null,
      isApplied: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.getSubtotal = this.getSubtotal.bind(this);
    this.handleDiscount = this.handleDiscount.bind(this);

  }

  componentDidMount() {
    this.getSubtotal();
  }

  getSubtotal() {
    let subtotal = this.props.cart.reduce(function (accumulator, currentValue) {
      return (accumulator + (parseInt(currentValue.price) * 0.01));
    }, 0);
    let formattedSubtotal = subtotal.toFixed(2);
    this.setState({ subtotal: formattedSubtotal });
    return this.state.subtotal;
  }

  handleChange(event) {
    this.setState({ code: event.target.value });
  }

  handleDiscount() {
    if (this.state.code === 'PARTY40') {
      let discount = (this.state.subtotal * 0.4).toFixed(2);
      let total = (this.state.subtotal - discount).toFixed(2);
      this.setState({ discount: discount, total: total, isApplied: true });

    } else {
      this.setState({ code: false });
    }
  }

  render() {
    let discountVal;
    let totalVal;
    let response;
    if (this.state.isApplied) {
      discountVal = 'Discount: - $' + this.state.discount;
      totalVal = 'Total: $' + this.state.total;
    }
    if (!this.state.code) {
      response = 'Not a valid code.';
    }
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

            <div>DISCLAIMER: FOR DEMONSTRATION PURPOSES ONLY. PLEASE DO NOT USE REAL INFORMATION.</div>

            <button onClick ={() => this.props.click('catalog', {})} className = {'btn btn-link btn-back-details'}>Back to Catalog</button>
            <button onClick ={() => this.props.click('cart', {})} className = {'btn btn-link btn-back-details'}>Return to Cart</button>
          </div>
          <div className ={'col-md-4 order-summary '}>
            <label > Order Summary</label>
            {this.props.cart.map(product => (<div key={this.props.cart.id} className={'summary-items'}>{product.name}  ${(product.price * 0.01).toFixed(2)}</div>))}

            <div className ={'mb-2 mt-2'}>
              <input onChange={this.handleChange} className ={'mb-2 form-control mr-2 code-input'} placeholder={'Discount code'}type="text"/>
              <button onClick = {this.handleDiscount} className ={'btn btn-code'}>Apply</button>
              <div>{response}</div>
            </div>

            <h3 className={'summary-items'}> Subtotal: ${this.state.subtotal}</h3>
            <h3 className={'summary-items'}>{discountVal}</h3>
            <h3 className={'summary-items'}>{totalVal}</h3>

            <button type={'submit'} onClick={() => this.props.onClick(this.state)} className ={'btn btn-cart'}>Place Order</button>
          </div>
        </div>

      </div>
    );
  }
}
