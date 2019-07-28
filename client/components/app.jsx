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
      bestSellers: [],
      show: true,
      quantity: 1

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

  addToCart(product, quantity) {

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
      let itemToAdd = Object.assign({}, product);
      if (quantity === null) {
        quantity = 1;
      }
      itemToAdd.quantity = quantity;
      itemToAdd.price = itemToAdd.quantity * itemToAdd.price;
      let allProducts = this.state.cart.concat(itemToAdd);
      let itemCount = this.state.cartItemCount + parseInt(quantity);
      this.setState({ cart: allProducts, cartItemCount: itemCount });
    } else {
      let otherItemsInCart = this.state.cart.filter(item => { return item.id !== productId; });
      let itemInCart = this.state.cart.filter(item => { return item.id === productId; });
      const oldQuantity = parseInt(itemInCart[0].quantity);
      let itemToAdd = Object.assign({}, product);
      if (quantity === null) {
        quantity = 1;
      }
      itemToAdd.quantity = parseInt(quantity) + parseInt(oldQuantity);

      itemToAdd.price = itemToAdd.quantity * product.price;

      let allCartItems = otherItemsInCart.concat(itemToAdd);
      if (this.state.cart.length === 1) {
        let itemCount = itemToAdd.quantity;
        this.setState({ cart: allCartItems, cartItemCount: itemCount });
      } else {
        let itemsCountOld = this.state.cartItemCount;
        let itemCount = itemsCountOld + parseInt(itemToAdd.quantity) - oldQuantity;
        this.setState({ cart: allCartItems, cartItemCount: itemCount });
      }
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
    fetch('api/orders.php', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' }
    })
      .then(response => response.json);
    this.setState({ cart: [], cartItemCount: 0, history: orderInfo });
    this.setView('thanks', {});
  }

  setView(name, params, id) {
    this.setState({ view: { name: name, params: params } });
    this.productDetailItemId = id;
  }

  componentDidMount() {
    this.getAllProducts();
    this.getCartItems();
    this.setState({ buttonText: 'Add to cart' });
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <div className ={'pink-stripe'}>40% OFF YOUR ENTIRE ORDER WITH CODE PARTY40 AT CHECKOUT</div>
          <div>
            <Header onClick={this.setView} cartItemCount ={this.state.cartItemCount}></Header>
          </div>
          <div className = 'container'>

            <div className = "d-flex justify-content-around">
              <div className = 'row '>

                <ProductList addToCart ={this.addToCart} onClick = {this.setView} products = {this.state.products}></ProductList>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return <CartSummary cartItemCount ={this.state.cartItemCount} onClick ={this.setView} cart = {this.state.cart} remove ={this.deleteFromCart}></CartSummary>;
    } else if (this.state.view.name === 'checkout') {
      return <CheckoutForm cartItemCount ={this.state.cartItemCount} placeOrder ={this.placeOrder} cart = {this.state.cart} onClick ={this.setView}/>;
    } else if (this.state.view.name === 'details') {
      return <ProductDetails buttonChange = {this.props.buttonChange} buttonText ={this.state.btnText} id = {this.productDetailItemId} cartItemCount ={this.state.cartItemCount} addToCart = {this.addToCart} onClick = {this.setView} params = {this.state.view.params} />;
    } else if (this.state.view.name === 'thanks') {
      return <ThankYou orderHistory ={this.state.history} cartItemCount = {this.state.cartItemCount} onClick ={this.setView}/>;
    } else if (this.state.view.name === 'main-page') {
      return <MainPage addToCart ={this.addToCart} onClick = {this.setView} products = {this.state.bestSellers} cartItemCount = {this.state.cartItemCount}></MainPage>;
    }

  }

}
