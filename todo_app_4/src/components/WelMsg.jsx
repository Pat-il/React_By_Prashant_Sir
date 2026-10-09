import React, { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelMsg = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div>
      {todoItems.length == 0 ? (
        <h3 className="welmsg">Enjoy Your Day</h3>
      ) : null}
    </div>
  );
};

export default WelMsg;
