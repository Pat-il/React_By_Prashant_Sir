import React from "react";

const WelMsg = ({ todoItems }) => {
  return (
    <div>
      {todoItems.length == 0 ? (
        <h3 className="welmsg">Enjoy Your Day</h3>
      ) : null}
    </div>
  );
};

export default WelMsg;
