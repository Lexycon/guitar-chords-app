import React from "react";
import Chord from "../chord";

const ListGroup = ({ items }) => {
  return (
    <ul className="list-group list-group-flush align-items-stretch">
      {items.map(item => (
        <Chord chord={item} key={item.key} />
      ))}
    </ul>
  );
};

export default ListGroup;
