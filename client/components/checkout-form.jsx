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

        <div className ={'checkout-container'}>

          <div className ={'col-md-7 order-form form-group '}>
            <div onClick ={() => this.props.onClick('main-page', {})} className = "checkout-logo point  mt-2">jeweliqo</div>
            <label className ="mt-3"> Contact information</label>
            <input className={'form-control'} type="email" placeholder={'Email'}/>
            <label > Shipping information</label>
            <input className ={'mb-2  form-control input-style '} type="text" placeholder={'First name'}/>
            <input className ={'mb-2 ml-2 form-control input-style'} type="text" placeholder={'Last name'}/>
            <input className={' mb-2 form-control'} type="text" placeholder={'Address'}/>
            <input className={' mb-2 form-control'} type="text" placeholder={'City'}/>
            <input className={' mb-2 form-control'} type="text" placeholder={'Country/Region'}/>
            <input className={' mb-2 form-control'} type="text" placeholder={'State'}/>
            <input className={' mb-2 form-control'} type="text" placeholder={'ZIP Code'}/>
            <label > Payment information</label>
            <input className ={'mb-2 form-control'} type="text" placeholder={'Credit Card Number'}/>

            <div onClick ={() => this.props.onClick('cart', {})} className={'mb-2 point'}><i className = "fas fa-chevron-left"></i> Return to cart</div>
            <div>DISCLAIMER: FOR DEMONSTRATION PURPOSES ONLY. PLEASE DO NOT USE REAL INFORMATION.</div>
          </div>
          <div className ={'col-md-5 order-summary order-summary-checkout '}>
            <label className ="mt-5"> </label>
            {this.props.cart.map(product => (<div key={this.props.cart.id} className={'summary-items mt-1'}><img className ="summary-img mr-1" src={product.image}
              alt=""/>{product.name} ({product.quantity})  ${(product.price * 0.01).toFixed(2)}</div>))}

            <div className ={'mb-2 mt-2'}>
              <input onChange={this.handleChange} className ={'mb-2 form-control mr-2 code-input'} placeholder={'Discount code'}type="text"/>
              <button onClick = {this.handleDiscount} className ={'btn btn-code'}>Apply</button>
              <div>{response}</div>
            </div>

            <h3 className={'summary-items'}> Subtotal: ${this.state.subtotal}</h3>
            <h3 className={'summary-items'}>{discountVal}</h3>
            <h3 className={'summary-items'}>{totalVal}</h3>

            <button type={'submit'} onClick={() => this.props.placeOrder(this.state)} className ={'btn btn-cart'}>Place Order</button>
          </div>
        </div>

      </div>
    );
  }
}
