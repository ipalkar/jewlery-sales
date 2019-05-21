import React from 'react';
import Header from './header';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };

  }

  getAllProducts() {
    fetch('/api/products.php', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(products => this.setState({ products: products }))
      .catch(error => console.error('No products available', error));

  }

  componentDidMount() {
    this.getAllProducts();

  }
  render() {
    return (<div className = 'container'>
      <div className = 'row'>
        <Header></Header>
      </div>
      <div className = "d-flex justify-content-around">
        <div className = 'row '>
          <ProductList products = {this.state.products}></ProductList>
        </div>
      </div>
    </div>);

  }

}
