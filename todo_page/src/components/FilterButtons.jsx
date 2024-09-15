import React from 'react';

const FilterButtons = ({ setFilter }) => {
  return (
    <div className="flex justify-between mb-6">
      <div className="flex gap-2">
        <button onClick={() => setFilter('all')} className="bg-blue-200 text-blue-700 px-4 py-2 rounded-lg">
          All
        </button>
        <button onClick={() => setFilter('todo')} className="bg-white text-blue-700 border border-blue-700 px-4 py-2 rounded-lg">
          To-do
        </button>
        <button onClick={() => setFilter('completed')} className="bg-white text-blue-700 border border-blue-700 px-4 py-2 rounded-lg">
          Completed
        </button>
      </div>
    </div>
  );
};

export default FilterButtons;
