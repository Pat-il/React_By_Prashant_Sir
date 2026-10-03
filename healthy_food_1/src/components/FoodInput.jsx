import React from "react";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <div>
      <input
        type="text"
        className="foodInput"
        onKeyDown={handleKeyDown}
        placeholder="Enter Food Name"
      />
    </div>
  );
};

export default FoodInput;
