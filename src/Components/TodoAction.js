import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "./Button";
import styles from "./TodoAction.module.css";

function TodoAction({
  resetTodos,
  deleteCompletedTodos,
  todos,
  completedTodosExist,
}) {
  if (!todos.length) {
    return <></>;
  }
  return (
    <div className={styles.todosActionContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodoAction;
