import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { TextFieldGroup } from "../common/TextFieldGroup";
import { TextAreaFieldGroup } from "../common/TextFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      title: "",
      location: "",
      from: "",
      to: "",
      current: false,
      description: "",
      errors: {},
      disabled: false
    };
  }

  render() {
    return ();
  }
}

export default connect(mapStateToProps)(withRouter(AddExperience));
