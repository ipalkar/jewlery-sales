import React from 'react';

export default class CartSummaryItem extends React.Component {
  render() {
    return (
      <div className = ' card-container'>
        <div className = 'card'>
          <img className = "card-img-top" src={this.props.product.image} />
          <div className = "card-body">
            <h5 className="card-title">{this.props.product.name}</h5>
            <div>${this.props.product.price}</div>
            <p> {this.props.product.shortDescription}</p>
          </div>
        </div>
      </div>);

  }
}
