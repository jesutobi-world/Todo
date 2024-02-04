// Container.js
import React, { useState } from 'react';
import Header from './Header';
import Create from './Create';
import Todos from './Todos';
import Prompt from './Prompt';

const Container = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div className="w-auto h-auto flex flex-col gap-6">
      <Header />
      <Create
       value={newTodo} onChange={handleInputChange} onAdd={addTodo}
        />
      <Todos
       todos={todos}
        />
      <Prompt />
    </div>
  );
};

export default Container;

// Functionality
// Create state management for input onChange, onChange newTodo should be updated to refelect user input
// This will be done by calling a function that sets newTodo to input value 
// onAdd shold happen when the user clicks on the plus icon, this updates the state to add the newTodo to the list of todos
