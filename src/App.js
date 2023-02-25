import { useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoAction from "./Components/TodoAction";
import TodoList from "./Components/TodoList";
import "./App.css";

function App() {
  const [todos , setTodos] = useState([]);

  const addTodoHandler = (text)  => {
    setTodos([...todos, text]);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoAction className="todoAction" />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
