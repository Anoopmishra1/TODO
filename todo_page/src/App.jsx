import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoTable from './components/ToDoTable';
import FilterButtons from './components/FilterButtons';

const App = () => {
  const [todos, setTodos] = useState([
    { task: "Learn React", description: "Managing State, Effects", category: "Programming", when: "-", priority: "High", fulfillment: 30, completed: false },
    { task: "Shopping", description: "Potatoes, Onions, Eggs, Olive Oil", category: "Household", when: "26.02.2023", priority: "High", fulfillment: 0, completed: false },
    { task: "Buy the tickets", description: "at cheapflights.com/shanghai", category: "Travel", when: "12.01.2023", priority: "Medium", fulfillment: 100, completed: true }
  ]);
  const [filter, setFilter] = useState('all');

  // Add new todo
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Filter todos based on status
  const getFilteredTodos = () => {
    if (filter === 'todo') {
      return todos.filter(todo => !todo.completed);
    } else if (filter === 'completed') {
      return todos.filter(todo => todo.completed);
    }
    return todos;
  };

  return (
    <React.Fragment>

    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-indigo-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-2/3">
        <h1 className="text-3xl font-bold text-center mb-6">To-Do List</h1>
        
        <ToDoForm addTodo={addTodo} />

        <FilterButtons setFilter={setFilter} />

        <ToDoTable todos={getFilteredTodos()} />
      </div>
    </div>
    </React.Fragment>
  );
};

export default App;
