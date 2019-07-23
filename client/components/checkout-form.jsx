import React from 'react';
import {
  FormGroup, Label, Input,
  FormFeedback, InputGroup
} from 'reactstrap';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      city: '',
      country: '',
      state: '',
      zip: '',
      cardNum: '',
      expDate: '',
      cvv: '',
      nameOnCard: '',
      code: ' ',
      email: '',
      subtotal: null,
      discount: null,
      total: null,
      isApplied: false,
      validate: {
        nameState: '',
        addressState: '',
        emailState: '',
        creditCardState: '',
        ccExpirationState: '',
        cvvState: '',
        zipState: '',
        nameOnCardState: '',
        cityState: '',
        stateState: '',
        countryState: ''
      },
      errorCode: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.getSubtotal = this.getSubtotal.bind(this);
    this.handleDiscount = this.handleDiscount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateCardNum = this.validateCardNum.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeCardNum = this.onChangeCardNum.bind(this);
    this.validateExpiration = this.validateExpiration.bind(this);
    this.onChangeExpiration = this.onChangeExpiration.bind(this);
    this.validateAddress = this.validateAddress.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.validateCvv = this.validateCvv.bind(this);
    this.onChangeCvv = this.onChangeCvv.bind(this);
    this.validateZIP = this.validateZIP.bind(this);
    this.onChangeZIP = this.onChangeZIP.bind(this);
    this.validateName = this.validateName.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.validateNameOnCard = this.validateNameOnCard.bind(this);
    this.onChangeNameOnCard = this.onChangeNameOnCard.bind(this);
    this.validateCountry = this.validateCountry.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.validateCity = this.validateCity.bind(this);
    this.validateState = this.validateState.bind(this);
    this.onChangeState = this.onChangeState.bind(this);

  }

  validateCardNum(e) {
    const creditCardRegex = /^[0-9]{16}$/;
    const { validate } = this.state;
    if (creditCardRegex.test(e.target.value)) {
      validate.creditCardState = 'has-success';
    } else {
      validate.creditCardState = 'has-danger';
    }
    this.setState({ validate });
  }
  onChangeCardNum(e) {
    this.handleInputChange(e);
    this.validateCardNum(e);
  }

  validateZIP(e) {
    const cvvRegex = /^[0-9]{5}$/;
    const { validate } = this.state;
    if (cvvRegex.test(e.target.value)) {
      validate.zipState = 'has-success';
    } else {
      validate.zipState = 'has-danger';
    }
    this.setState({ validate });
  }

  onChangeZIP(e) {
    this.handleInputChange(e);
    this.validateZIP(e);
  }

  validateCvv(e) {
    const cvvRegex = /^[0-9]{3}$/;
    const { validate } = this.state;
    if (cvvRegex.test(e.target.value)) {
      validate.cvvState = 'has-success';
    } else {
      validate.cvvState = 'has-danger';
    }
    this.setState({ validate });
  }
  onChangeCvv(e) {
    this.handleInputChange(e);
    this.validateCvv(e);
  }
  validateEmail(e) {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    const { validate } = this.state;
    if (emailRegex.test(e.target.value)) {
      validate.emailState = 'has-success';
    } else {
      validate.emailState = 'has-danger';
    }
    this.setState({ validate });
  }
  onChangeEmail(e) {
    this.handleInputChange(e);
    this.validateEmail(e);
  }

  validateExpiration(e) {
    const expirationRegex = /^(1[0-2]|0[1-9]|\d)\/([2-9]\d[1-9]\d|[1-9]\d)$/;
    const { validate } = this.state;
    if (expirationRegex.test(e.target.value)) {
      validate.ccExpirationState = 'has-success';
    } else {
      validate.ccExpirationState = 'has-danger';
    }
    this.setState({ validate });
  }

  onChangeExpiration(e) {
    this.handleInputChange(e);
    this.validateExpiration(e);
  }

  validateNameOnCard(e) {
    const nameRegex = /[A-Za-z]/;
    const { validate } = this.state;
    if (nameRegex.test(e.target.value)) {
      validate.nameOnCardState = 'has-success';
    } else {
      validate.nameOnCardState = 'has-danger';
    }
    this.setState({ validate });
  }
  onChangeNameOnCard(e) {
    this.handleInputChange(e);
    this.validateNameOnCard(e);
  }

  validateCountry(e) {
    const nameRegex = /[A-Za-z]/;
    const { validate } = this.state;
    if (nameRegex.test(e.target.value)) {
      validate.countryState = 'has-success';
    } else {
      validate.countryState = 'has-danger';
    }
    this.setState({ validate });
  }

  onChangeCountry(e) {
    this.handleInputChange(e);
    this.validateCountry(e);

  }

  validateState(e) {
    const nameRegex = /[A-Za-z]/;
    const { validate } = this.state;
    if (nameRegex.test(e.target.value)) {
      validate.stateState = 'has-success';
    } else {
      validate.stateState = 'has-danger';
    }
    this.setState({ validate });
  }

  onChangeState(e) {
    this.handleInputChange(e);
    this.validateState(e);

  }

  validateCity(e) {
    const nameRegex = /[A-Za-z]/;
    const { validate } = this.state;
    if (nameRegex.test(e.target.value)) {
      validate.cityState = 'has-success';
    } else {
      validate.cityState = 'has-danger';
    }
    this.setState({ validate });
  }
  onChangeCity(e) {
    this.handleInputChange(e);
    this.validateCity(e);

  }

  validateName(e) {
    const nameRegex = /[A-Za-z]/;
    const { validate } = this.state;
    if (nameRegex.test(e.target.value)) {
      validate.nameState = 'has-success';
    } else {
      validate.nameState = 'has-danger';
    }
    this.setState({ validate });
  }
  onChangeName(e) {
    this.handleInputChange(e);
    this.validateName(e);
  }

  validateAddress(e) {
    const addressRegex = /[A-Za-z0-9]/;
    const { validate } = this.state;
    if (addressRegex.test(e.target.value)) {
      validate.addressState = 'has-success';
    } else {
      validate.addressState = 'has-danger';
    }
    this.setState({ validate });
  }

  onChangeAddress(e) {
    this.handleInputChange(e);
    this.validateAddress(e);
  }

  componentDidMount() {
    this.getSubtotal();
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value, errorMessages: { [event.target.name]: '' } });
  }

  getSubtotal() {
    let subtotal = this.props.cart.reduce(function (accumulator, currentValue) {
      return (accumulator + (parseInt(currentValue.price) * 0.01));
    }, 0);
    let formattedSubtotal = subtotal.toFixed(2);
    this.setState({ subtotal: formattedSubtotal, total: formattedSubtotal });
    return this.state.subtotal;
  }

  handleChange(event) {
    this.setState({ code: event.target.value, errorCode: '' });

  }

  checkIfFormCompleted() {
    for (let property in this.state.validate) {
      if (this.state.validate[property] === 'has-danger' || this.state.validate[property] === '') {
        return false;
      }
    }
    return true;
  }

  handleDiscount() {
    if (this.state.code === 'PARTY40') {
      let discount = (this.state.subtotal * 0.4).toFixed(2);
      let total = (this.state.subtotal - discount).toFixed(2);
      this.setState({ discount: discount, total: total, isApplied: true });

    } else {
      this.setState({ errorCode: 'Not a valid code.' });
    }
  }

  render() {
    let discountVal;
    let totalVal;
    let totalDiv;
    let discountWithIcon;
    if (this.state.isApplied) {
      discountVal = this.state.discount;
      totalVal = this.state.total;
      discountWithIcon = <h3 className ="summary-items">Discount: <i className="fas fa-tags ml-1"></i>PARTY40  <div className = "checkout-nums"> $ -{discountVal}</div></h3>;
      totalDiv = <h3 className ="summary-items">Total:  <div className = "checkout-nums"> $ {totalVal}</div></h3>;
    } else {
      totalDiv = <h3 className ="summary-items total-checkout">Total:  <div className = "checkout-nums"> $ {this.state.subtotal}</div></h3>;
    }

    const orderHistory = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country,
      state: this.state.state,
      zip: this.state.zip,
      cardNum: this.state.cardNum,
      expDate: this.state.expDate,
      nameOnCard: this.state.nameOnCard,
      email: this.state.email,
      subtotal: this.state.subtotal,
      discount: this.state.discount,
      total: this.state.total,
      cart: this.props.cart

    };

    const placeOrderBtnOnFormCompletion = this.checkIfFormCompleted() ? <button type={'submit'} onClick ={() => this.props.placeOrder(orderHistory)} className ={'btn btn-cart floater mr-2'}>Place Order</button> : <div></div>;

    return (
      <div>
        <div className ={'pink-stripe'}></div>

        <div className ={'checkout-container'}>

          <div className ={'col-md-7 order-form form-group '}>
            <div onClick ={() => this.props.onClick('main-page', {})} className = "checkout-logo point  mt-2">jeweliqo</div>

            <FormGroup>
              <Label>Contact information</Label>
              <InputGroup>
                <Input name="email" valid={ this.state.validate.emailState === 'has-success' } invalid={ this.state.validate.emailState === 'has-danger' } onChange={this.onChangeEmail} className ="mb-2" placeholder ="Email"/>
                <FormFeedback className={'mb-2'} invalid>Enter a valid email</FormFeedback>
              </InputGroup>
              <Label>Shipping Information</Label>
              <InputGroup>
                <Input name="name" valid={ this.state.validate.nameState === 'has-success' } invalid={ this.state.validate.nameState === 'has-danger' } onChange={this.onChangeName}className =" mr-1 mb-2"placeholder ="Name"/>
                <FormFeedback className={'mb-2'} invalid>Enter a name</FormFeedback>
              </InputGroup>

              <InputGroup>
                <Input name="address" valid={ this.state.validate.addressState === 'has-success' } invalid={ this.state.validate.addressState === 'has-danger' } onChange={this.onChangeAddress} className ="mb-2" placeholder ="Street address"/>
                <FormFeedback className={'mb-2'} invalid>Enter a valid street address</FormFeedback>
              </InputGroup>

              <InputGroup>
                <Input name="city" valid={ this.state.validate.cityState === 'has-success' } invalid={ this.state.validate.cityState === 'has-danger' } onChange={this.onChangeCity} className ="mb-2" placeholder ="City"/>
                <FormFeedback className={'mb-2'} invalid>Enter a city</FormFeedback>
              </InputGroup>

              <InputGroup>
                <Input name="state" valid={ this.state.validate.stateState === 'has-success' } invalid={ this.state.validate.stateState === 'has-danger' } onChange={this.onChangeState} className ="mb-2" placeholder ="State"/>
                <FormFeedback className={'mb-2'} invalid>Enter a state</FormFeedback>
              </InputGroup>

              <InputGroup>
                <Input name="country" valid={ this.state.validate.countryState === 'has-success' } invalid={ this.state.validate.countryState === 'has-danger' } onChange={this.onChangeCountry} className ="mb-2" placeholder ="Country/Region"/>
                <FormFeedback className={'mb-2'} invalid>Enter a country or region</FormFeedback>
              </InputGroup>

              <InputGroup>
                <Input className ="mb-2" name ="zip" valid ={this.state.validate.zipState === 'has-success'} invalid ={this.state.validate.zipState === 'has-danger'} onChange ={this.onChangeZIP}placeholder ="ZIP Code"/>
                <FormFeedback className={'mb-2'} invalid>Enter a valid 5 digit ZIP code</FormFeedback>
              </InputGroup>

              <Label>Payment information</Label>
              <InputGroup>
                <Input name ="nameOnCard" valid={ this.state.validate.nameOnCardState === 'has-success' } invalid={ this.state.validate.nameOnCardState === 'has-danger' } onChange={this.onChangeNameOnCard} className ="mb-2"placeholder={'Name on card'}/>
                <FormFeedback className={'mb-2'} invalid>Enter a name</FormFeedback>
              </InputGroup>

              <InputGroup>
                <Input name="cardNum" valid={ this.state.validate.creditCardState === 'has-success' } invalid={ this.state.validate.creditCardState === 'has-danger' } onChange={this.onChangeCardNum} className ="mb-2"placeholder ="Card number"/>
                <FormFeedback className={'mb-2'} invalid>Enter a valid 16 digit card number</FormFeedback>
              </InputGroup>
              <InputGroup>
                <Input name="expDate" valid={ this.state.validate.ccExpirationState === 'has-success' } invalid={ this.state.validate.ccExpirationState === 'has-danger' } onChange={this.onChangeExpiration} className =" mr-1 mb-2" placeholder ="Expiration Date (MM/YY)"/>
                <FormFeedback className={'mb-2'} invalid>Enter a valid date in MM/YY format</FormFeedback>
              </InputGroup>

              <InputGroup>
                <Input name="cvv" valid={ this.state.validate.cvvState === 'has-success' } invalid={ this.state.validate.cvvState === 'has-danger' } onChange={this.onChangeCvv} className ="mb-2" placeholder ="Security code"/>
                <FormFeedback invalid>Enter a valid CVV</FormFeedback>
              </InputGroup>

            </FormGroup>

            <div onClick ={() => this.props.onClick('cart', {})} className={'mb-2 point cart-chev'}><i className = "fas fa-chevron-left mt-4"></i> Return to cart</div>
            {placeOrderBtnOnFormCompletion}
            <div className ="mt-4">REMINDER: THIS IS NOT A REAL ORDER. PLEASE DO NOT USE REAL INFORMATION.</div>
          </div>
          <div className ={'col-md-5 order-summary order-summary-checkout '}>
            <label className ="mt-2"> </label>
            {this.props.cart.map(product => (
              <div key={this.props.cart.id} className={'summary-items mt-1'}>
                <div className ="product-thumbnail-wrapper mr-2">
                  <img className ="summary-img mr-1" src={product.image} alt=""/>
                  <span className ="product-thumbnail-quantity">{product.quantity}</span>
                </div>
                <div className ="product-thumbnail-wrapper">
                  {product.name}   ${(product.price * 0.01).toFixed(2)}
                </div>

              </div>))}

            <div className ={'mb-2 mt-2 border-style'}>
              <input onChange={this.handleChange} className ={'mb-2 form-control mr-2 code-input mt-2'} name ="code" placeholder={'Discount code'}type="text"/>
              <button onClick = {this.handleDiscount} className ={'btn btn-code '}>Apply</button>
              <div className={'invalid-form'}>{this.state.errorCode}</div>
            </div>

            <h3 className={'summary-items'}> Subtotal: <div className = "checkout-nums">${this.state.subtotal}</div></h3>
            {discountWithIcon}
            <h3 className={'summary-items'}> Shipping: <div className = "checkout-nums">FREE</div></h3>
            {totalDiv}

          </div>
        </div>

      </div>
    );
  }
}
