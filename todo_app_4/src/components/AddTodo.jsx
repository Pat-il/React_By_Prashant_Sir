import React, { useContext, useState } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const AddTodo = () => {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const { addNewItem } = useContext(TodoItemsContext);

  const handleAddTodo = (todoName, todoDate) => {
    // Implementation for adding todo
    // console.log("Adding todo: ", todoName, todoDate);
    addNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  const isAddDisabled = todoName.trim() === "" || todoDate === "";

  return (
    <div>
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              onChange={(e) => setTodoName(e.target.value)}
              value={todoName}
              placeholder="Enter todo Here"
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              onChange={(e) => setTodoDate(e.target.value)}
              value={todoDate}
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success  kg-button"
              onClick={() => handleAddTodo(todoName, todoDate)}
              disabled={isAddDisabled}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
