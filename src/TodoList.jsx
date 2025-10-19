import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "Sample Task", id: uuidv4(), isdone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (newTodo.trim() === "") return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { task: newTodo, id: uuidv4(), isdone: false },
    ]);
    setNewTodo("");
  };

  let updateTdodValue = (event) => setNewTodo(event.target.value);

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isdone: true } : todo
      )
    );
  };

  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, isdone: true }))
    );
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-wrapper">
      <h2 className="title">Task Manager</h2>

      <div className="input-row">
        <input
          placeholder="Add a new task..."
          onChange={updateTdodValue}
          value={newTodo}
        />
        <button onClick={addNewTask}>Add</button>
      </div>

      <h3 className="section-title">Tasks</h3>

      <ul className="task-list">
        {todos.map((todo) => (
          <li key={todo.id} className="task-item">
            <span
              className={`task-text ${todo.isdone ? "done" : ""}`}
            >
              {todo.task}
            </span>
            <div className="actions">
              <button onClick={() => markAsDone(todo.id)}>Done</button>
              <button onClick={() => deleteTodo(todo.id)} className="danger">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button onClick={markAllDone} className="mark-all">
        Mark All Done
      </button>
    </div>
  );
}
