import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <button 
        className="add-btn"             
        >
        Add to cart
        <i className="fas fa-shopping-cart"></i>
      </button>
    )
  }
}
