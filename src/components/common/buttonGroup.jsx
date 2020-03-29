import React from "react";

const ButtonGroup = ({ name, items, activeItem, onChange }) => {
  return (
    <div className="btn-group btn-block" role="group">
      {items.map(item => (
        <button
          type="button"
          key={item}
          value={item}
          name={name}
          onClick={onChange}
          className={
            item === activeItem ? "btn btn-primary" : "btn btn-outline-primary"
          }
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
