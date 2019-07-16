import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    return (
      <div id ={this.props.products.id} onClick = {() => this.props.click('details', {}, this.props.products.id)} className = ' card-container col-lg-4 col-sm-6 col-xs-12'>
        <div className = 'card'>
          <div className = "img-container">
          <img className = "card-img-top" src={this.props.products.image} />
            <a  onClick={() => this.props.setModalShow(true)} className = "quick-shop"href="">Quick Shop</a>
          </div>
          <div className = "card-body">
            <h5 className={'list-item-heading'}>{this.props.products.name}</h5>
            <div className ={'list-item-price'}>${(this.props.products.price * 0.01).toFixed(2) }</div>
          </div>
        </div>
      </div>);
  }
}
