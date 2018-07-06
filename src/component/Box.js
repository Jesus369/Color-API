import React, { Component } from "react";
import "../App.css";

export default class Box extends Component {
  render() {
    return (
      <div className="outer">
        <div
          style={{ backgroundColor: `${this.props.color}` }}
          className="wrapper"
        >
          <button
            onClick={() => {
              this.props.handleClick();
            }}
            className="button"
          >
            Change Color
          </button>
        </div>
      </div>
    );
  }
}
