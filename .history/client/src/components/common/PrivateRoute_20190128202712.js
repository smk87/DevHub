import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-prop-types";

const PrivateRoute = ({component:Component,auth,...rest}) =>(
)

PrivateRoute.proptypes={
    auth:PropTypes.object.isRequired
}
const mapStateToProps=State=>({
    auth:state.auth
})


export default connect(mapStateToProps)(PrivateRoute);
