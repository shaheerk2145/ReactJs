import React, { useState } from 'react'
import { useTodo } from '../Context/todoContent';

function TodoForm() {
    const [todo,setTodo] =useState("");

    const {addTodo} = useTodo();
    // console.log(useTodo());
    
    const add =(e)=>{
        e.preventDefault();
        if(!todo) return

        addTodo({todo ,completed:false})
        setTodo("")
    }   
  return (
    <>
      <form onSubmit={add} className='flex'>
        <input 
            type='text'
            placeholder='Write Todo..'
            className='w-full border text-black border-black/70 outline-none px-3 py-2 rounded-l-lg bg-white  duration-100'
            value={todo}
            onChange={(event)=>{
                setTodo(event.target.value);
            }}
        />
        <button 
            type='submit'
            className='bg-zinc-900 py-2 text-white rounded-r-lg px-3 shrink-0  font-weight-bolder '
        >
            Add 
        </button>
      </form>
    </>
  );
}

export default TodoForm
