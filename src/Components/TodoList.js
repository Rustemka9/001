import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.map((todos, index) => (
        <Todo todo={todos} key={index} />
      ))}
    </div>
  );
}

export default TodoList;
