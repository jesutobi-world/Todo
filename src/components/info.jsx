
const info = () => {
  return (
    <div className="bg-white w-[500px] min-h-[65px] flex items-center gap-4 overflow-hidden px-4 font-semibold text-sm text-dark-grayish-blue-lightMode justify-between">
    <div>Number of Items</div>
    <ul className="flex gap-4">
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
    </ul>
    <div>Clear Completed</div>
</div>
  )
}

export default info