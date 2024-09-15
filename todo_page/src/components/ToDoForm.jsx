import React, { useState } from 'react';

const ToDoForm = ({ addTodo }) => {
  const [newTask, setNewTask] = useState({ task: "", description: "", category: "", when: "", priority: "Low", fulfillment: 0, completed: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.task) {
      addTodo(newTask);
      setNewTask({ task: "", description: "", category: "", when: "", priority: "Low", fulfillment: 0, completed: false });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="Task"
        value={newTask.task}
        onChange={(e) => setNewTask({ ...newTask, task: e.target.value })}
        className="border rounded px-2 py-1 mr-2"
      />
      <input
        type="text"
        placeholder="Description"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        className="border rounded px-2 py-1 mr-2"
      />
      <input
        type="text"
        placeholder="Category"
        value={newTask.category}
        onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
        className="border rounded px-2 py-1 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Add a new to-do
      </button>
    </form>
  );
};

export default ToDoForm;
