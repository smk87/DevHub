import React, { Component } from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

Dashboard.proptypes = {
  getCurrentProfile: Proptypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.profile
});

export default connect(
  null,
  { getCurrentProfile }
)(Dashboard);
