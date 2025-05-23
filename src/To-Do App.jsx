import React, { useState } from "react";
import { CheckCircle, Trash2, Plus } from "lucide-react"; // Icon set (optional)

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
    setDeletedTasks([...deletedTasks, taskToDelete]);
  };

  const handleCompleteTask = (taskToComplete) => {
    setTasks(tasks.filter((task) => task !== taskToComplete));
    setCompletedTasks([...completedTasks, taskToComplete]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8 drop-shadow-lg">🚀 My Epic To-Do List</h1>

        <div className="mb-10 bg-gray-800 p-6 rounded-2xl shadow-xl">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="What’s on your mind?"
              value={task}
              onChange={handleInputChange}
              className="flex-1 p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button
              onClick={handleAddTask}
              className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-4 py-2 rounded-lg shadow-md flex items-center gap-2"
            >
              <Plus size={20} />
              Add
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pending Tasks */}
          <div className="bg-gray-800 p-5 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-700">🕒 Pending</h2>
            {tasks.length === 0 && (
              <p className="text-gray-500 italic">You’re all caught up.</p>
            )}
            <ul>
              {tasks.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-700"
                >
                  <span>{item}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCompleteTask(item)}
                      className="bg-green-600 hover:bg-green-700 p-2 rounded-md transition"
                      title="Mark as completed"
                    >
                      <CheckCircle size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteTask(item)}
                      className="bg-red-600 hover:bg-red-700 p-2 rounded-md transition"
                      title="Delete task"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Completed Tasks */}
          <div className="bg-gray-800 p-5 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-700">✅ Completed</h2>
            {completedTasks.length === 0 && (
              <p className="text-gray-500 italic">No tasks completed yet.</p>
            )}
            <ul>
              {completedTasks.map((item, index) => (
                <li
                  key={index}
                  className="line-through text-gray-400 py-2 border-b border-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Deleted Tasks */}
          <div className="bg-gray-800 p-5 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-700">🗑️ Deleted</h2>
            {deletedTasks.length === 0 && (
              <p className="text-gray-500 italic">Nothing in the trash.</p>
            )}
            <ul>
              {deletedTasks.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-500 py-2 border-b border-gray-700 italic"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

