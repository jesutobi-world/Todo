// Todos.js
// import React from 'react';
import Todo from './todo';
import Info from './Info';
import Empty from './empty';

const Todos = ({todos}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-md h-auto shadow-xl not-last-child:border-b">
      {todos.length === 0 ? <Empty /> : todos.map((todo, index) => <Todo key={index} todo={todo} />)}
      <Info />
    </div>
  );
};

export default Todos;

