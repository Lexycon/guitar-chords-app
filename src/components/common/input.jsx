import React from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">
          {label}
        </span>
      </div>

      <input
        name={name}
        type="number"
        value={value}
        className="form-control text-center"
        aria-label={label}
        aria-describedby="inputGroup-sizing-default"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
