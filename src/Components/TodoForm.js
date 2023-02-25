import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new task"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
