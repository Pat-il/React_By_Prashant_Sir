import React from "react";
import Item from "./Item";

const FoodItems = ({ foodItems }) => {
  return (
    <div>
      <ul className="list-group">
        {foodItems.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default FoodItems;
