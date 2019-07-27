import React from 'react';
import Header from './header';
export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      isLoaded: false,
      buttonText: 'Add to bag',
      quantity: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.buttonChange = this.buttonChange.bind(this);

  }

  handleChange(event) {
    this.setState({ quantity: event.target.value });
  }

  buttonChange(event) {
    event.target.disabled = true;
    this.setState({ buttonText: 'Added!' });

    setTimeout(() => {
      this.setState({ buttonText: 'Add to bag' });
      event.target.disabled = false;
    }, 1000);

  }

  componentDidMount() {
    fetch('/api/products.php?id=' + this.props.id, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(product => this.setState({ product: product, isLoaded: true }));
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div className = "product-details-style">
          <div className ={'pink-stripe'}>40% OFF YOUR ENTIRE ORDER WITH CODE PARTY40 AT CHECKOUT</div>
          <Header onClick = {this.props.onClick} cartItemCount ={this.props.cartItemCount}></Header>
          <div className = {'details-container'}>

            <div className={' mt-3 mb-3 '}>
              <div className={'col-sm-12 col-lg-6 col-xs-6 details'}>
                <div onClick ={() => this.props.onClick('catalog', {})} className={'mb-2 point'}><i className = "fas fa-chevron-left"></i> Back to Catalog</div>
                <img className ="details-img mb-2"src={this.state.product.image} />
              </div>
              <div className = {'col-sm-12 col-lg-6 col-xs-6 details'}>
                <div className={'product-quantity mt-4'}>

                  <h1 className={'details-text mt-2'}>{this.state.product.name}</h1>
                  <div className ={'details-price mb-3'}>${(this.state.product.price * 0.01).toFixed(2)}</div>
                  <p>{this.state.product.shortDescription}</p>

                  <div className = "qty-display" >
                    <label className ="qty-label qty-font mr-2" htmlFor="quantity">Qty: </label>
                    <select onChange={this.handleChange} value = {this.state.quantity} className ="mr-3 qty-font " id="quantity" name="quantity">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>

                  <button onClick={() => {
                    this.props.addToCart(this.state.product, this.state.quantity);
                    this.buttonChange(event);
                  }
                  } className ={'btn btn-cart'}>{this.state.buttonText}</button>

                </div>
              </div>
            </div>
            <div className = {'col-lg-12 col-sm-12 col-xs-12'}>
              <p>{this.state.product.longDescription}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>No details loaded</div>
      );
    }

  }
}
