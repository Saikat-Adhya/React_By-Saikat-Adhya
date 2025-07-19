import React from "react";
const Addtask = () => {
  const [tasks, setTasks] = React.useState([]);
  const [input, setInput] = React.useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };
  const deleteTask = () => {
    setTasks([]);
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, i) => <li key={i}>{task}</li>)}
      </ul>
      <button onClick={deleteTask}>
        Clear All
      </button>
    </div>
  );
};
export default Addtask;