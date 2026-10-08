import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteItem }) => {
  return (
    <div>
      <div className="items-container">
        {todoItems.map((item, index) => (
          <TodoItem
            key={index}
            todoName={item.todoName}
            todoDate={item.todoDate}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoItems;
