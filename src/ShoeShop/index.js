import React, { Component } from "react";
import data from "./data.json";
import ProductList from './ProductList'
import ModalProduct from './modal-product'
import Navbar from "./Navbar";


export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoeInfo: data,
      detailProduct: {}
    };
  }

  handleProductDetails = (product) => {
    this.setState({detailProduct: product});
  }

  render() {
    const { shoeInfo, detailProduct } = this.state;

    return (
      <div className="container">
        <h3 className="title text-center">Shoes shop</h3>

        <div className="row">
          <Navbar/>
          <ProductList 
            data={shoeInfo}
            handleProductDetails={this.handleProductDetails} 
          />
        </div>
        <ModalProduct data={detailProduct}/>
      </div>
    );
  }
}
