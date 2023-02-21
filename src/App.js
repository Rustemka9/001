import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoAction from "./Components/TodoAction";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoAction className="todoAction" />
      <TodoList />
    </div>
  );
}

export default App;
