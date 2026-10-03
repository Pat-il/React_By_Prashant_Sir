import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  let todoItems = [
    { todoName: "Buy Milk", todoDate: "4/10/2023" },
    { todoName: "Go to college", todoDate: "4/10/2023" },
    { todoName: "Like this video", todoDate: "right now" },
  ];

  return (
    <>
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </>
  );
}

export default App;
