import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-prop-types";

const PrivateRoute = ({component:Component,auth,...rest}) =>(
    <Route 
    {...rest}
    render={props=>
        auth.isAuthenticated===true?(
            <Component {...props}/>
        ):(
            <Redirect to='/login>
        )
    }
    />
);

PrivateRoute.proptypes={
    auth:PropTypes.object.isRequired
}
const mapStateToProps=State=>({
    auth:state.auth
})


export default connect(mapStateToProps)(PrivateRoute);
