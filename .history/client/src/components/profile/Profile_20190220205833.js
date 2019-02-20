import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import ProfileGithub from "./ProfileGithub";
import Spinner from "../common/Spinner";

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>TODO: PROFILE ABOUT</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  null
)(Profile);
