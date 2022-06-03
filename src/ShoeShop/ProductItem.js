import React, { Component } from "react";
import Button from './Button'

export default class ProductItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className=" col col-lg-4">
        <div 
          className="card card-item" 
          data-toggle="modal" 
          data-target="#modalProduct"
          onClick={() => this.props.handleProductDetails(data)}
        >
          <img
            className="card-img-top"
            src={data.image}
            alt={data.name}
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h4 className="card-title">{data.name}</h4>
            <p className="card-text">
              {data.price}
              <i className="fas fa-dollar-sign"></i>
            </p>
            <Button/>
          </div>
        </div>
      </div>
    );
  }
}