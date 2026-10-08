import { useState } from "react";
import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelMsg from "./components/WelMsg";

function App() {
  let [todoItems, setTodoItems] = useState([]);

  let handleAddTodo = (addTodoName, addTodoDate) => {
    // Implementation for adding todo
    let result = [
      ...todoItems,
      { todoName: addTodoName, todoDate: addTodoDate },
    ];
    setTodoItems(result);
  };

  let handleDeleteTodo = (deleteTodoName) => {
    console.log("Deleting Todo: ", deleteTodoName);
    let result = todoItems.filter((item) => item.todoName !== deleteTodoName);
    setTodoItems(result);
  };

  return (
    <>
      <AppName />
      <AddTodo onAddTodo={handleAddTodo} />
      <WelMsg todoItems={todoItems} />
      <TodoItems todoItems={todoItems} onDeleteItem={handleDeleteTodo} />
    </>
  );
}

export default App;
