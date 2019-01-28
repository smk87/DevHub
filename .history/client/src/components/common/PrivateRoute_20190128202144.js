import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-prop-types";

function PrivateRoute() {
  return <div />;
}

export default connect(mapStateToProps)(PrivateRoute);
