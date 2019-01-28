import React from "react";
import classnames from "classnames";
import propTypes from "prop-types";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": this.state.errors.email
        })}
        placeholder={placeholder}
        name="email"
        value={this.state.email}
        onChange={this.onChange}
      />
      {this.state.errors.email && (
        <div className="invalid-feedback">{this.state.errors.email}</div>
      )}
    </div>
  );
};

export default TextFieldGroup;
