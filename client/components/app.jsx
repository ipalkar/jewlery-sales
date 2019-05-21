import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: { name: 'catalog', params: {} }
    };

    this.setView = this.setView.bind(this);

  }

  getAllProducts() {
    fetch('/api/products.php', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(products => this.setState({ products: products }))
      .catch(error => console.error('No products available', error));

  }

  setView(name, params) {

    this.setState({ view: { name: name, params: params } });

  }

  componentDidMount() {
    this.getAllProducts();

  }
  render() {
    if (this.state.view.name === 'catalog') {
      return (<div className = 'container'>
        <div className = 'row'>
          <Header></Header>
        </div>
        <div className = "d-flex justify-content-around">
          <div className = 'row '>
            <ProductList onClick = {this.setView} products = {this.state.products}></ProductList>
          </div>
        </div>
      </div>);
    } else {
      return <ProductDetails onClick = {this.setView} params = {this.state.view.params} />;
    }

  }

}
