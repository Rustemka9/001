import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, deleteTodo, toggleTodo }) {
  if (!todos.length) {
    return (
      <div className={styles.todoListContainer}>
        <h2>The list is empty</h2>
      </div>
    );
  }

  return (
    <div className={styles.todoListContainer}>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
