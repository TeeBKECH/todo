import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTodos } from './store/todoSlice'

import Input from './components/Input'
import List from './components/List'

const API_URL = 'https://jsonplaceholder.typicode.com/todos/?_limit=15'

const App = () => {
  const { status, items } = useSelector((store) => store.todo)
  const dispatch = useDispatch()

  const getTodos = () => {
    dispatch(fetchTodos(API_URL))
  }

  useEffect(() => {
    getTodos()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='app'>
      <h1>TODO LIST</h1>
      <Input getTodos={getTodos} />
      {status === 'loading' && 'Загрузка...'}
      {status === 'error' && 'Ошибка при получении списка дел'}
      {!items.length && 'Список дел пуст'}
      {status === 'success' && <List items={items} />}
    </div>
  )
}

export default App
