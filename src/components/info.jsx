
const Info = ({filteredTodos, onFilterChange, onClear, filter}) => {

  return (
    <div className="bg-white w-[500px] min-h-[65px] flex items-center gap-4 overflow-hidden px-4 font-semibold text-base text-dark-grayish-blue-lightMode justify-between">
    <div>{filteredTodos.length} item left</div>
    <ul className="flex gap-4">
        <li className={`cursor-pointer ${filter === 'all' ? 'text-bright-blue' : ''}`}
        onClick={() => onFilterChange('all')}
        >All</li>
        <li className={`cursor-pointer ${filter === 'active' ? 'text-bright-blue' : ''}`}
        onClick={() => onFilterChange('active')}
        >Active</li>
        <li className={`cursor-pointer ${filter === 'completed' ? 'text-bright-blue' : ''}`}
        onClick={() => onFilterChange('completed')}
        >Completed</li>
    </ul>
    <div onClick={onClear} className="cursor-pointer">Clear Completed</div>
</div>
  )
}

export default Info