import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    return (
      <div className = ' card-container'>
        <div className = 'card'>
          <img className = "card-img-top" src={this.props.products.image} />
          <div className = "card-body">
            <h5 className="card-title">{this.props.products.name}</h5>
            <div>${this.props.products.price}</div>
            <p> {this.props.products.shortDescription}</p>
          </div>
        </div>
      </div>);
  }
}
