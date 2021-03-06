import React from "react";
import classnames from "classnames";

const SelectListGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  type,
  onChange,
  options
}) => {
  return (
    <div className="form-group">
      <textarea
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default SelectListGroup;
