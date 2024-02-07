// import React from 'react'
import Empty from './empty';
import Todo from './todo';
import {SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable'

const column = ({ todos, isCompleted, onDelete, filteredTodos }) => {
    return (
        <div>
            <SortableContext items={todos} strategy={verticalListSortingStrategy}>
                {filteredTodos.length === 0 ? (
                    <Empty filter={filter} />
                ) : (
                    filteredTodos.map((todo, index) => (
                        <Todo
                            key={index}
                            todo={todo}
                            isCompleted={isCompleted}
                            onDelete={onDelete}
                            draggable
                        />
                    ))
                )}
            </SortableContext>
        </div>
    )
}

export default column