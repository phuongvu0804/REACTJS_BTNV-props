import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <ul className="col-lg-2 nav-bar">
          <li className="active">Home</li>
          <li>Shop</li>
      </ul>
    )
  }
}
