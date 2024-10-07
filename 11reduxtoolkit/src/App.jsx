import React from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todo'

function App() {
  return (
    <>
      <h1 className='text-center text-3xl text-white font-extrabold bg-zinc-500 p-4 mb-9'>Redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
