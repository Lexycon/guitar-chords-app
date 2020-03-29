import React from "react";

const Chord = props => {
  return (
    <li
      className="list-group-item text-center d-inline-block font-weight-bold py-1"
      style={{ fontSize: "20px" }}
    >
      <span className="text-primary">{props.chord.value[0]}</span>
      <span className="text-secondary">{props.chord.value[1]}</span>
      <span className="text-dark">{props.chord.value[2]}</span>
    </li>
  );
};

export default Chord;
