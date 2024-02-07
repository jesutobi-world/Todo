// Todo.js
import Check from '/images/icon-check.svg';
import Cross from '/images/icon-cross.svg';
import {useSortable} from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'

const Todo = ({ todo, isCompleted, onDelete }) => {
  const id = todo.id
  const { attributes, listeners, setNodeRef, transform, transition } =
  useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      className="bg-white w-[90vw] lg:w-[500px] h-auto min-h-[60px] flex items-center gap-4 overflow-hidden p-4 border-b border-solid border-light-grayish-blue"
      ref={setNodeRef} {...attributes} {...listeners} style={style}
      >
      <div
        className={`w-[20px] h-[20px] rounded-full border-[1px] border-solid border-dark-grayish-blue-lightMode cursor-pointer flex items-center justify-center ${
          todo.completed ? 'bg-gradient-to-r from-left-gradient to-right-gradient border-none transition duration-900 ease-in-out' : ''
        }`}
        onClick={() => isCompleted(todo.id)}
        
      >
        <img src={Check} alt="check icon" />
      </div>
      <p className={`flex flex-1 items-center text-very-dark-grayish-blue font-semibold text-lg ${todo.completed ? 'opacity-60 line-through' : ''}`}>{todo.text}</p>
      <div className={`w-[20px] h-[20px] cursor-pointer flex items-center justify-center`} onClick={() =>   onDelete(todo.id)}>
        <img src={Cross} alt="cross icon" />
      </div>
    </div>
  );
};

export default Todo;
