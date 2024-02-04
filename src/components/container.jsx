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
      <Create value={newTodo} onChange={handleInputChange} onAdd={addTodo} />
      <Todos todos={todos} />
      <Prompt />
    </div>
  );
};

export default Container;
