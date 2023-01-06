import React from 'react'
import { useSelector } from 'react-redux'

import ToDoItem from './ToDoItem'

const List = () => {
  const { items } = useSelector((store) => store.todo)
  return (
    <div className='todo-list'>
      {items.map((el) => (
        <ToDoItem
          key={el.id}
          {...el}
        />
      ))}
    </div>
  )
}

export default List
