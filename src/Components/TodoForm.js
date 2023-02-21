function TodoForm() {
  const [data, setData] = useState({ task });

  function addTask(event) {
    event.preventDefault();
  }

  function changeTask(event, name) {
    setData({ ...data, [name]: event.target.value });
  }

  return (
    <form onSubmit={addTask}>
      <input
        placeholder="Enter your task"
        className="taskInput"
        value={data.task}
        onChange={(event)=> changeTask(event, '')}
      ></input>
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
}

export default TodoForm;
