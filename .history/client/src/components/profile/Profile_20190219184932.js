import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { getProfiles } from "../../actions/profileActions";

class Profile extends Component {
  render() {
    return <div />;
  }
}

export default connect(
  null,
  { getProfiles }
)(Profile);
