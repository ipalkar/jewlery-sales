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
        nameOnCardState: ''
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
    const cvvRegex = /^[0-9]{3,4}$/;
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
    const nameRegex = /[A-Za-z0-9]/;
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

  validateName(e) {
    const nameRegex = /[A-Za-z0-9]/;
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
    this.setState({ subtotal: formattedSubtotal });
    return this.state.subtotal;
  }

  handleChange(event) {
    this.setState({ code: event.target.value, errorMessages: { code: '' } });

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
    if (this.state.isApplied) {
      discountVal = 'Discount: - $' + this.state.discount;
      totalVal = 'Discounted total: $' + this.state.total;
    }
    const checkFormComplete = (this.state.validate.nameState && this.state.validate.addressState && this.state.validate.emailState && this.state.validate.nameOnCardState && this.state.validate.creditCardState && this.state.validate.ccExpirationState && this.state.validate.cvvState && this.state.validate.zipState) === 'has-success' ? <button type={'submit'} onClick={this.props.placeOrder} className ={'btn btn-cart floater mr-2'}>Place Order</button> : <button className ="hidden-btn"></button>;

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
                <FormFeedback invalid>Enter a valid email</FormFeedback>
              </InputGroup>
              <Label>Shipping Information</Label>
              <InputGroup>
                <Input name="name" valid={ this.state.validate.nameState === 'has-success' } invalid={ this.state.validate.nameState === 'has-danger' } onChange={this.onChangeName}className =" mr-1 mb-2"placeholder ="Name"/>
                <FormFeedback>Enter a name</FormFeedback>
              </InputGroup>

              <InputGroup>
                <Input name="address" valid={ this.state.validate.addressState === 'has-success' } invalid={ this.state.validate.addressState === 'has-danger' } onChange={this.onChangeAddress} className ="mb-2" placeholder ="Street address"/>
                <FormFeedback invalid>Enter a valid street address</FormFeedback>
              </InputGroup>

              <InputGroup>
                <Input className ="mb-2" name ="zip" valid ={this.state.validate.zipState === 'has-success'} invalid ={this.state.validate.zipState === 'has-danger'} onChange ={this.onChangeZIP}placeholder ="ZIP Code"/>
                <FormFeedback invalid>Enter a valid 5 digit ZIP code</FormFeedback>
              </InputGroup>

              <Label>Payment information</Label>
              <InputGroup>
                <Input name ="nameOnCard" valid={ this.state.validate.nameOnCardState === 'has-success' } invalid={ this.state.validate.nameOnCardState === 'has-danger' } onChange={this.onChangeNameOnCard} className ="mb-2"placeholder={'Name on card'}/>
                <FormFeedback>Enter a name</FormFeedback>
              </InputGroup>

              <InputGroup>
                <Input name="creditCard" valid={ this.state.validate.creditCardState === 'has-success' } invalid={ this.state.validate.creditCardState === 'has-danger' } onChange={this.onChangeCardNum} className ="mb-2"placeholder ="Card number"/>
                <FormFeedback invalid>Enter a valid card number</FormFeedback>
              </InputGroup>
              <InputGroup>
                <Input name="expDate" valid={ this.state.validate.ccExpirationState === 'has-success' } invalid={ this.state.validate.ccExpirationState === 'has-danger' } onChange={this.onChangeExpiration} className =" mr-1 mb-2" placeholder ="Expiration Date (MM/YY)"/>
                <FormFeedback>Enter a valid date in MM/YY format</FormFeedback>
              </InputGroup>

              <InputGroup>
                <Input name="cvv" valid={ this.state.validate.cvvState === 'has-success' } invalid={ this.state.validate.cvvState === 'has-danger' } onChange={this.onChangeCvv} className ="mb-2" placeholder ="Security code"/>
                <FormFeedback invalid>Enter a valid CVV</FormFeedback>
              </InputGroup>

            </FormGroup>

            <div onClick ={() => this.props.onClick('cart', {})} className={'mb-2 point cart-chev'}><i className = "fas fa-chevron-left mt-4"></i> Return to cart</div>
            {checkFormComplete}
            <div className ="mt-4">REMINDER: THIS IS NOT A REAL ORDER. PLEASE DO NOT USE REAL INFORMATION.</div>
          </div>
          <div className ={'col-md-5 order-summary order-summary-checkout '}>
            <label className ="mt-2"> </label>
            {this.props.cart.map(product => (<div key={this.props.cart.id} className={'summary-items mt-1'}><img className ="summary-img mr-1" src={product.image}
              alt=""/>{product.name} ({product.quantity})  ${(product.price * 0.01).toFixed(2)}</div>))}

            <div className ={'mb-2 mt-2 border-style'}>
              <input onChange={this.handleChange} className ={'mb-2 form-control mr-2 code-input mt-2'} name ="code" placeholder={'Discount code'}type="text"/>
              <button onClick = {this.handleDiscount} className ={'btn btn-code '}>Apply</button>
              <div className={'invalid-form'}>{this.state.errorCode}</div>
            </div>

            <h3 className={'summary-items'}> Subtotal: ${this.state.subtotal}</h3>
            <h3 className={'summary-items'}>{discountVal}</h3>
            <h3 className={'summary-items'}>{totalVal}</h3>

          </div>
        </div>

      </div>
    );
  }
}
