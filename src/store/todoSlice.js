import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  status: 'loading',
}

export const fetchTodos = createAsyncThunk('todo/fetchTodoStatus', async (url) => {
  const data = await fetch(url).then((res) => res.json())
  return data
})

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload)
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    toggleComplete: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading'
        state.items = []
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'success'
        state.items = action.payload
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = 'error'
        state.items = []
      })
  },
})

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions

export default todoSlice.reducer
