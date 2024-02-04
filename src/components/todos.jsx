// Todos.js
import React from 'react';
import Todo from './Todo';
import Info from './Info';

const Todos = ({ todos }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-md h-auto shadow-xl not-last-child:border-b">
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
      <Info />
    </div>
  );
};

export default Todos;
