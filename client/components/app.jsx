import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cartSummary';
import CheckoutForm from './checkout-form';
import ThankYou from './thank-you';
import MainPage from './main-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: { name: 'main-page', params: {} },
      cart: [],
      cartItemCount: 0,
      bestSellers: []
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
      .then(products => this.setState({ products: products, bestSellers: products.slice(6) }))
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

    let productId = product.id;
    let itemInCart = this.state.cart.filter(item => { return item.id === productId; });

    if (this.state.cart.length === 0) {
      this.setState({ cartItemCount: 0 });
    }

    if (itemInCart.length === 0) {
      product['quantity'] = 1;
      let products = this.state.cart.concat(product);
      let itemCount = this.state.cartItemCount + 1;
      this.setState({ cart: products, cartItemCount: itemCount });
    } else {
      let itemInCart = this.state.cart.filter(item => { return item.id === productId; });
      const priceCount = itemInCart[0].price / itemInCart[0].quantity;
      itemInCart[0].quantity = itemInCart[0].quantity + 1;
      itemInCart[0].price = priceCount * itemInCart[0].quantity;
      let otherItemsInCart = this.state.cart.filter(item => { return item.id !== product.id; });
      let products = otherItemsInCart.concat(itemInCart[0]);
      let itemCount = this.state.cartItemCount + 1;
      this.setState({ cart: products, cartItemCount: itemCount });
    }
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
    let cartItemCount = this.state.cartItemCount - product.quantity;

    this.setState({ cart: products, cartItemCount: cartItemCount });

  }

  placeOrder(orderInfo) {
    orderInfo['cart'] = this.state.cart;
    fetch('api/orders.php', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' }
    })
      .then(response => response.json);
    this.setState({ cart: [], cartItemCount: 0 });
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
            <div>
              <Header onClick={this.setView} cartItemCount ={this.state.cartItemCount}></Header>
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
      return <ProductDetails id = {this.productDetailItemId} cartItemCount ={this.state.cartItemCount} addToCart = {this.addToCart} onClick = {this.setView} params = {this.state.view.params} />;
    } else if (this.state.view.name === 'thanks') {
      return <ThankYou onClick ={this.setView}/>;
    } else if (this.state.view.name === 'main-page') {
      return <MainPage onClick = {this.setView} products = {this.state.bestSellers} cartItemCount = {this.state.cartItemCount}></MainPage>;
    }

  }

}
