import Button from "./Button";

function TodoAction() {
  return (
    <div className="action">
      <Button text="reset" />
      <Button text="delete" />
    </div>
  );
}

export default TodoAction;
