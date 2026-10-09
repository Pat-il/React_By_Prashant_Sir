import { useState } from "react";
import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelMsg from "./components/WelMsg";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  let [todoItems, setTodoItems] = useState([]);

  let addNewItem = (addTodoName, addTodoDate) => {
    // Implementation for adding todo
    let result = [
      ...todoItems,
      { todoName: addTodoName, todoDate: addTodoDate },
    ];
    setTodoItems(result);
  };

  let deleteItem = (deleteTodoName) => {
    console.log("Deleting Todo: ", deleteTodoName);
    let result = todoItems.filter((item) => item.todoName !== deleteTodoName);
    setTodoItems(result);
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
