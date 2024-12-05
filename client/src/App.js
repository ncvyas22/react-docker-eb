import React, { useState, useEffect } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Fetch tasks from the backend
  useEffect(() => {
    fetch("/api/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  // Add a new task
  const handleAddTask = () => {
    fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task: newTask }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks([...tasks, data]);
        setNewTask("");
      })
      .catch((err) => console.error("Error adding task:", err));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul style={{ marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li key={index}>{task.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
