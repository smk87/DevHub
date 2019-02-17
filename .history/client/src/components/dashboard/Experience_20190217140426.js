import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class Experience extends Component {
  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>{exp.from}</td>
        <td>{exp.to}</td>
      </tr>
    ));
    return <div>sss</div>;
  }
}

export default connect(null)(withRouter(Experience));
