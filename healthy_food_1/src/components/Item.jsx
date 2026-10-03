import React from "react";

const Item = ({ item, index, handleBuyButtonClicked }) => {
  return (
    <li className="list-group-item kg-item" key={index}>
      <span className="kg-span">{item}</span>
      <button className="button" onClick={handleBuyButtonClicked}>
        Buy
      </button>
    </li>
  );
};

export default Item;
