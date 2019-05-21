import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: { name: 'catalog', params: {} },
      cart: []
    };

    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);

  }

  getAllProducts() {
    fetch('/api/products.php', {
      method: 'GET'
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
      .then(response => response.json)
      .then(newProduct => {
        const products = this.state.cart.concat(newProduct);
        this.setState({ cart: products });
      });
  }

  setView(name, params) {

    this.setState({ view: { name: name, params: params } });

  }

  componentDidMount() {
    this.getAllProducts();
    this.getCartItems();
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (<div className = 'container'>
        <div className = 'row'>
          <Header cartItemCount ={this.state.cart.length}></Header>
        </div>
        <div className = "d-flex justify-content-around">
          <div className = 'row '>
            <ProductList onClick = {this.setView} products = {this.state.products}></ProductList>
          </div>
        </div>
      </div>);
    } else {
      return <ProductDetails cartItemCount ={this.state.cart.length} addToCart = {this.addToCart} onClick = {this.setView} params = {this.state.view.params} />;
    }

  }

}
