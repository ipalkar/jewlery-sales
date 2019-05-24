import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cartSummary';
import CheckoutForm from './checkout-form';
import ThankYou from './thank-you';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: { name: 'catalog', params: {} },
      cart: []
    };
    this.productDetailItemId = null;
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
  }

  getAllProducts() {
    fetch('/api/products.php', {
      method: 'GET',
      headers: { 'Content-type': 'application/json' }
    })
      .then(response => response.json())
      .then(products => this.setState({ products: products }))
      .catch(error => console.error('No products available', error));
  }

  getCartItems() {
    fetch('/api/cart.php', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(cartItems => this.setState({ cart: cartItems }));
  }

  addToCart(product) {
    fetch('/api/cart.php', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'Content-type': 'application/json' }
    })
      .then(response => response.json);

    const products = this.state.cart.concat(product);
    this.setState({ cart: products });
  }

  deleteFromCart(product) {
    fetch('/api/cart.php', {
      method: 'DELETE',
      body: JSON.stringify(product),
      headers: { 'Content-type': 'application/json' }
    })
      .then(response => response.json);
    const products = this.state.cart.filter(function (item) {
      return item !== product;
    });
    this.setState({ cart: products });

  }

  placeOrder(orderInfo) {
    orderInfo['cart'] = this.state.cart;
    fetch('api/orders.php', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' }
    })
      .then(response => response.json);
    this.setState({ cart: [] });
    this.setView('thanks', {});
  }

  setView(name, params, id) {
    this.setState({ view: { name: name, params: params } });
    this.productDetailItemId = id;
  }

  componentDidMount() {
    this.getAllProducts();
    this.getCartItems();
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <div className ={'pink-stripe'}></div>
          <div className = 'container'>
            <div className = 'row'>
              <Header onClick={this.setView} cartItemCount ={this.state.cart.length}></Header>
            </div>
            <div className = "d-flex justify-content-around">
              <div className = 'row '>
                <ProductList onClick = {this.setView} products = {this.state.products}></ProductList>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return <CartSummary onClick ={this.setView} cart = {this.state.cart} remove ={this.deleteFromCart}></CartSummary>;
    } else if (this.state.view.name === 'checkout') {
      return <CheckoutForm onClick ={this.placeOrder} cart = {this.state.cart} click ={this.setView}/>;
    } else if (this.state.view.name === 'details') {
      return <ProductDetails id = {this.productDetailItemId} cartItemCount ={this.state.cart.length} addToCart = {this.addToCart} onClick = {this.setView} params = {this.state.view.params} />;
    } else if (this.state.view.name === 'thanks') {
      return <ThankYou onClick ={this.setView}/>;
    }
  }

}
