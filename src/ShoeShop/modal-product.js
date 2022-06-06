import React, { Component } from "react";

export default class modalProduct extends Component {
  render() {
    const { data } = this.props
    return (
      <div className="modal" id="modalProduct">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-5">
                  <img className="img-fluid" style={{width: '100%'}} src={data.image} alt={data.name} />
                </div>
                <div className="col-sm-7">
                  <h3>Product details</h3>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>{data.name}</td>
                      </tr>
                      <tr>
                        <td>Price</td>
                        <td>{data.price}</td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>{data.description}</td>
                      </tr>
                      <tr>
                        <td>Quantity</td>
                        <td>{data.quantity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
