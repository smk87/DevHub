import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientId: "23cf61a3f4e339b63fe8",
      clientSecret: "6ef3e53d25994170f52ff35dd87edabca576de5d",
      count: 5,
      sort: "created: asc",
      repos: []
    };
  }

  render() {
    const { username } = this.props;
    const { sort, count, clientId, clientSecret } = this.state;
    return (
      <div>
        <h1>TODO: PROFILE GITHUB</h1>
      </div>
    );
  }
}

export default ProfileGithub;
