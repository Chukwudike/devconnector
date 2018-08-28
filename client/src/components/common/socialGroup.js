import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const socialGroup = ({
  name,
  placeholder,
  value,
  error,
  type,
  icon,
  onChange
}) => {
  return (

    <div className="input-group mb-3">
    <div className="input-group-prepend">
    <span className="input-group-text">
    <i className = {icon}> </i>
    </span>
    </div>
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error} </div>}
    </div>
  );
};
socialGroup.propType = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type : PropTypes.string.isRequired,
  icon : PropTypes.string.isRequired
};

socialGroup.defaultProps = {
    type: "text"
  };

export default socialGroup;
