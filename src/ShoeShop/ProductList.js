import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  renderShoeList = () => {
    const { handleProductDetails } = this.props
    return this.props.data.map( product => (
      <ProductItem 
        key={product.id} 
        data={product} 
        handleProductDetails={handleProductDetails}
      />
    ))
  }

  render() {
    return (
        <div className="col-lg-10">
            <div className="row">
                {this.renderShoeList()}
            </div>
        </div>
    )
  }
}
