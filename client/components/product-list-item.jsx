import React from 'react';
import Modal from './modal';

export default class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (

      <div id ={this.props.products.id} className = ' card-container col-lg-4 col-sm-6 col-xs-12'>
        <div className = 'card'>
          <div className = "img-container">
            <img className = "card-img-top" onClick = {() => this.props.click('details', {}, this.props.products.id)} src={this.props.products.image} />
            <button className={'quick-shop'} onClick={() => this.toggleModal()} >Quick Shop</button>
          </div>
          <div className = "card-body">
            <h5 className={'list-item-heading'}>{this.props.products.name}</h5>
            <div className ={'list-item-price'}>${(this.props.products.price * 0.01).toFixed(2) }</div>
          </div>
        </div>
        {this.state.show && <Modal id ={this.props.products.id} showFullDetails = {this.props.click} product = {this.props.products} addToCart = {this.props.addToCart} price ={this.props.products.price} name ={this.props.products.name} image ={this.props.products.image} closeModal={this.toggleModal}></Modal>}
      </div>

    );
  }
}
