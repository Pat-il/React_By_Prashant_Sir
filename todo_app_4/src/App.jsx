import { useReducer } from "react";
import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelMsg from "./components/WelMsg";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        todoName: action.payload.itemName,
        todoDate: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.todoName !== action.payload.itemName,
    );
  }
  return newTodoItems;
};

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  let addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  let deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems: todoItems,
          addNewItem: addNewItem,
          deleteItem: deleteItem,
        }}
      >
        <AppName />
        <AddTodo />
        <WelMsg />
        <TodoItems />
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
