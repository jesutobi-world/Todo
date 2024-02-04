// Create.js

import { AiOutlinePlus } from 'react-icons/ai';

const Create = ({ value, onChange, onAdd }) => {
  return (
    <div className="bg-white rounded-md w-[500px] min-h-[65px] flex items-center gap-4 overflow-hidden px-4">
      <div className="w-[20px] h-[20px] rounded-full border-[1px] border-solid border-dark-grayish-blue-lightMode cursor-pointer"></div>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="flex-1 bg-transparent flex border-none outline-none h-full text-lg font-medium text-very-dark-grayish-blue"
        value={value}
        onChange={onChange}
      />
      <div className="cursor-pointer" onClick={onAdd}>
        <AiOutlinePlus size={30} color="hsl(236, 9%, 61%)" />
      </div>
    </div>
  );
};

export default Create;
