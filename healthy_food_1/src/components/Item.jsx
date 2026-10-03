import React from "react";

const Item = ({ item, index }) => {
  return (
    <li className="list-group-item kg-item" key={index}>
      <span className="kg-span">{item}</span>
    </li>
  );
};

export default Item;
