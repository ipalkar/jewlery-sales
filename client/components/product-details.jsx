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
    fetch('/api/products.php?id=' + this.props.id, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(product => this.setState({ product: product, isLoaded: true }));
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <div className ={'pink-stripe'}></div>
          <div className = {'details-container'}>
            <Header onClick = {this.props.onClick} cartItemCount ={this.props.cartItemCount}></Header>
            <div className = {'col-12 ml-2'}>

            </div>
            <div className={' mt-3 mb-3 '}>
              <div className={'col-sm-6 col-lg-6 col-xs-6 details'}>
                <img className ="details-img mb-2"src={this.state.product.image} />
              </div>
              <div className = {'col-sm-6 col-lg-6 col-xs-6 details'}>
                <div>
                  <h1 className={'details-text'}>{this.state.product.name}</h1>
                  <div className ={'details-price '}>${(this.state.product.price * 0.01).toFixed(2)}</div>
                  <p>{this.state.product.shortDescription}</p>
                  <button onClick ={() => this.props.addToCart(this.state.product)} className ={'btn btn-cart'}>Add to Cart</button>
                  <button onClick ={() => this.props.onClick('catalog', {})} className = {'btn btn-link btn-back-details'}>Back to Catalog</button>
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
