import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { addTodo } from '../store/todoSlice'

import refreshimg from '../assets/img/refresh.svg'

const Input = ({ getTodos }) => {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  const dispatch = useDispatch()

  const handleClick = () => {
    if (value) {
      dispatch(
        addTodo({
          userId: 1,
          completed: false,
          title: value,
          id: uuidv4(),
        }),
      )
    }

    setValue('')
  }

  useEffect(() => {
    inputRef?.current.focus()
  }, [])

  return (
    <div className='todo-add'>
      <input
        ref={inputRef}
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Добавить</button>
      <button onClick={getTodos}>
        <img
          src={refreshimg}
          alt='refresh'
        />
      </button>
    </div>
  )
}

export default Input
