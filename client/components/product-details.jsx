import React from 'react';
import Header from './header';
export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch('/api/products.php?id=1', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(product => this.setState({ product: product, isLoaded: true }));
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div className = {'details-container'}>
          <Header></Header>
          <div className = {'col-12 ml-2'}>
            <button onClick ={() => this.props.onClick('catalog', {})} className = {'btn btn-link'}>Back to Catalog</button>
          </div>
          <div className={'col-12 mt-3 mb-3 '}>
            <div className={'col-5 details'}>
              <img src={this.state.product.image} />
            </div>
            <div className = {'col-4 details'}>
              <h1>{this.state.product.name}</h1>
              <div>${this.state.product.price}</div>
              <p>{this.state.product.shortDescription}</p>
            </div>
          </div>
          <div className = {'col-12'}>
            <p>{this.state.product.longDescription}</p>
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
