import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";

import Box from "../component/Box";

class BoxContainer extends Component {
  render() {
    //   Passing in our loadColor function from actionCreators
    return <Box handleClick={this.props.loadColor} color={this.props.color} />;
  }
}

// Allowing our state to connect as props
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(BoxContainer);
