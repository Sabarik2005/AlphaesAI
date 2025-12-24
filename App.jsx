import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task === "") return;

    setTasks([
      ...tasks,
      {
        text: task,
        date,
        time,
        completed: false,
      },
    ]);

    setTask("");
    setDate("");
    setTime("");
  };

  return (
    <div className="container">
      <div className="todo-card">
        <h1>📝 My TODO List</h1>
        <p className="subtitle">Stay organized and productive</p>

        <label>Task</label>
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <div className="row">
          <div>
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label>Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>

        <button onClick={addTask}>➕ ADD TASK</button>

        <h2>Your Tasks</h2>

        {tasks.length === 0 && (
          <p className="empty">No tasks yet. Add your first task above! 🎯</p>
        )}

        <ul>
          {tasks.map((t, index) => (
            <li key={index}>
              <span>{t.text}</span>
              <small>{t.date} {t.time}</small>
            </li>
          ))}
        </ul>

        <div className="footer">
          <span>Total: {tasks.length}</span>
          <span>Active: {tasks.length}</span>
          <span>Completed: 0</span>
        </div>
      </div>
    </div>
  );
}

export default App;
