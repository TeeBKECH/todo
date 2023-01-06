import React from 'react'
import { useDispatch } from 'react-redux'

import { removeTodo, toggleComplete } from '../store/todoSlice'

const ToDoItem = ({ title, id, completed }) => {
  const dispatch = useDispatch()

  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />
      <h3>{title}</h3>
      <button
        className='todo-remove'
        onClick={() => dispatch(removeTodo({ id }))}
      >
        &times;
      </button>
    </div>
  )
}

export default ToDoItem
