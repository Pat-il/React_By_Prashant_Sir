import React from "react";

const Display = ({ calVal }) => {
  return (
    <div>
      <input type="text" className="display" value={calVal} readOnly />
    </div>
  );
};

export default Display;
