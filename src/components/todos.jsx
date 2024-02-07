// Todos.js
// import React from 'react';

import Info from './Info';

import Column from './column';
import {
  DndContext,
  closestCorners,
} from "@dnd-kit/core";

const Todos = ({ todos, isCompleted, onDelete, onFilterChange, filter, onClear, handleDragEnd, sensors }) => {

  // Function to filter todos based on the selected filter
  const filterTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = filterTodos();



  return (
    <div className="flex flex-col overflow-hidden rounded-md h-auto shadow-xl">
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd} sensors={sensors}> 
        <Column todos={todos} filteredTodos={filteredTodos} />
      </DndContext>
      <Info
        filteredTodos={filteredTodos}
        onFilterChange={onFilterChange}
        onClear={onClear}
        filter={filter}
      />
    </div>

  );
};

export default Todos;

