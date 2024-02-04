// Todo.js
import Check from '../images/icon-check.svg'

const Todo = ({ todo }) => {
  return (
    <div className="bg-white w-[500px] h-auto min-h-[60px] flex items-center gap-4 overflow-hidden px-4 border-b border-solid border-light-grayish-blue">
      <div className="w-[20px] h-[20px] rounded-full border-[1px] border-solid border-dark-grayish-blue-lightMode cursor-pointer bg-gradient-to-r from-left-gradient to-right-gradient flex items-center justify-center">
        <img src={Check} alt="check icon"  />
      </div>
      <div className='flex flex-1 items-center'>
        {todo} 
        </div>
    </div>
  );
};

export default Todo;

// Functionality
// Onclick of circle show check, remove circle border and update Completed ( can be reversed so try toggle instead of add and remove with the classes and updating)
