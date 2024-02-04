// Todo.js

const Todo = ({ todo }) => {
  return (
    <div className="bg-white w-[500px] min-h-[65px] flex items-center gap-4 overflow-hidden px-4 border-b border-solid border-light-grayish-blue">
      <div className="w-[20px] h-[20px] rounded-full border-[1px] border-solid border-dark-grayish-blue-lightMode cursor-pointer"></div>
      <div>{todo}</div>
    </div>
  );
};

export default Todo;
