import React from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  handleCloseModal(event) {
    event.target.classList[0] === 'custom-modal' && this.props.closeModal();
    event.target.classList[0] === 'close-icon' && this.props.closeModal();

  }

  handleChange(event) {
    let product = this.state.product;
    product.quantity = event.target.value;
    this.setState({ product: product });
  }

  componentDidMount() {
    fetch('/api/products.php?id=' + this.props.id, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(product => this.setState({ product: product, isLoaded: true }));
  }

  render() {
    return (
      <div className="custom-modal" onClick={this.handleCloseModal} >
        <div className="custom-modal-dialog modal-fade animate-top">
          <div className="close-icon font-weight-bold" onClick={this.props.closeModal}> ✖ </div>
          <div className="">
            <img className ="modal-img ml-4" src={this.props.image} />
            <div className ="modal-details ml-3">
              <div className = {'point'} onClick = {() => this.props.showFullDetails('details', {}, this.props.id)}>{this.props.name}</div>
              <div className ="mb-2">${(this.props.price * 0.01).toFixed(2) }</div>

              <label className ="qty-label qty-font mr-2" htmlFor="quantity">Qty: </label>
              <select onChange={this.handleChange} value = {this.state.quantity} className ="mr-3 qty-font" id="quantity" name="quantity">
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

              <button onClick ={() => this.props.addToCart(this.state.product)} className ="btn btn-cart">Add to Cart</button>

            </div>

          </div>
        </div>
      </div>
    );
  }
}
