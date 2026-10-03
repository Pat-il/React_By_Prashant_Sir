import React from "react";

const ErrMsg = ({ foodItems }) => {
  return (
    <div>{foodItems.length === 0 ? <h3>I am still Hungry</h3> : null}</div>
  );
};

export default ErrMsg;
