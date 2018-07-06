import React, { Component } from "react";
import "../App.css";

export default class Box extends Component {
  render() {
    return (
      <div className="outer">
        <div className="wrapper">
          <button className="button">Change Color</button>
        </div>
      </div>
    );
  }
}
