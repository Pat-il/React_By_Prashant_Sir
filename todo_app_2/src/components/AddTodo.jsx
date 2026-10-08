// import React, { useState } from "react";

// const AddTodo = ({ onAddTodo }) => {
//   const [todoName, setTodoName] = useState("");
//   const [todoDate, setTodoDate] = useState("");

//   const handleAddTodo = (todoName, todoDate) => {
//     // Implementation for adding todo
//     // console.log("Adding todo: ", todoName, todoDate);
//     onAddTodo(todoName, todoDate);
//     setTodoName("");
//     setTodoDate("");
//   };

//   const isAddDisabled = todoName.trim() === "" || todoDate === "";

//   return (
//     <div>
//       <div className="container text-center">
//         <div className="row kg-row">
//           <div className="col-6">
//             <input
//               type="text"
//               onChange={(e) => setTodoName(e.target.value)}
//               value={todoName}
//               placeholder="Enter todo Here"
//             />
//           </div>
//           <div className="col-4">
//             <input
//               type="date"
//               onChange={(e) => setTodoDate(e.target.value)}
//               value={todoDate}
//             />
//           </div>
//           <div className="col-2">
//             <button
//               type="button"
//               className="btn btn-success  kg-button"
//               onClick={() => handleAddTodo(todoName, todoDate)}
//               disabled={isAddDisabled}
//             >
//               Add
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddTodo;

// ---------------------- Form Data --------------------------------
import React, { useRef } from "react";

const AddTodo = ({ onAddTodo }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddTodo = (event) => {
    event.preventDefault();
    // Implementation for adding todo
    // console.log("Adding todo: ", todoName, todoDate);
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;

    onAddTodo(todoName, todoDate);
  };

  const isAddDisabled = todoName.trim() === "" || todoDate === "";

  return (
    <div>
      <div className="container text-center">
        <form className="row kg-row" onSubmit={handleAddTodo}>
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter todo Here"
            />
          </div>
          <div className="col-4">
            <input type="date" ref={todoDateElement} />
          </div>
          <div className="col-2">
            <button
              className="btn btn-success  kg-button"
              disabled={isAddDisabled}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
