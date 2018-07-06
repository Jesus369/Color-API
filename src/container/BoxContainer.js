import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";

import Box from "../component/Box";

class BoxContainer extends Component {
  render() {
    return <Box />;
  }
}

// Connecting the state
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(BoxContainer);
