import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [index, setIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) return;
    if (index === null) {
      setTodos([...todos, input]);
    } else {
      const updated = [...todos];
      updated[index] = input;
      setTodos(updated);
      setIndex(null);
    }
    setInput("");
  };

  const handleDelete = (index1) => {
    setTodos(todos.filter((_, i) => i !== index1));

    if (index1 === index) {
      setInput("");
      setIndex(null);
    }
  };
  const handleUpdate = (index1) => {
    setInput(todos[index1]);
    setIndex(index1);
  };

  return (
    <>
      <div className="container">
        <h1>TODO APP</h1>
        <form onSubmit={handleSubmit} className="form-box">
          <input
            type="text"
            placeholder="Enter your Todo Here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="inputBox"
          />
          <button className="submitButton" type="submit">
            {index === null ? "ADD" : "Update"}
          </button>
        </form>

        {todos.map((todo, index1) => {
          return (
            <div className="todoList">
              <div className="todosBox" key={index1}>
                {todo}
              </div>
              <div className="buttonsBox">
                <button
                  className="deleteButton"
                  onClick={() => handleDelete(index1)}
                >
                  Delete
                </button>
                <button
                  className="editButton"
                  onClick={() => handleUpdate(index1)}
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
