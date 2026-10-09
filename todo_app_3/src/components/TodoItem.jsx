import React, { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItem = ({ todoName, todoDate }) => {
  const { deleteItem } = useContext(TodoItemsContext);

  let handleDeleteItem = (todoName) => {
    // console.log("Deleting Todo: ", todoName);
    deleteItem(todoName);
  };

  return (
    <div>
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              onClick={() => handleDeleteItem(todoName)}
              className="btn btn-danger  kg-button"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
