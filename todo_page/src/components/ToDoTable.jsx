import React from 'react';

const ToDoTable = ({ todos }) => {
  return (
    <table className="table-auto w-full text-left">
      <thead>
        <tr>
          <th className="px-4 py-2">Task</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">Category</th>
          <th className="px-4 py-2">When</th>
          <th className="px-4 py-2">Priority</th>
          <th className="px-4 py-2">Fulfillment</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={index} className={`${todo.completed ? 'line-through' : ''}`}>
            <td className="border px-4 py-2">{todo.task}</td>
            <td className="border px-4 py-2">{todo.description}</td>
            <td className="border px-4 py-2">{todo.category}</td>
            <td className="border px-4 py-2">{todo.when}</td>
            <td className="border px-4 py-2">{todo.priority}</td>
            <td className="border px-4 py-2">{todo.fulfillment}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ToDoTable;
