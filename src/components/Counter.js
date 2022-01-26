import React from "react";
import "../styles/Box.css";

class Counter extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="box shadow p-4 rounded d-flex align-items-center justify-content-center">
          <button
            className="btn btn-outline-danger rounded-pill"
            onClick={this.props.removeCount}
          >
            -
          </button>
          <div className="d-flex mt-2">
            <h1 className="d-inline-flex mx-3 lead">Counter : </h1>
            <h2 className="d-inline-flex mx-3 lead">{this.props.count}</h2>
          </div>
          <button
            className="btn btn-outline-success rounded-pill"
            onClick={this.props.addCount}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
