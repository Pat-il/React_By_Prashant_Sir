import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div>
      <div className="items-container">
        {todoItems.map((item, index) => (
          <TodoItem todoName={item.todoName} todoDate={item.todoDate} />
        ))}
      </div>
    </div>
  );
};

export default TodoItems;
