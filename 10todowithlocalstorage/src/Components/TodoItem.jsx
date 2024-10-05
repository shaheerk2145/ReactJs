import React, { useState } from 'react'
import { useTodo } from '../Context';

function TodoItem({todo}) {
    
    
    const [isTodoEditable, setisTodoEditable] = useState(false);
    const [todoMessage,setTodoMessage] = useState(todo.todo);
    const {updateTodo,deleteTodo,toggleComplete} = useTodo();
    // console.log(isTodoEditable);
    
    const editTodo = ()=>{
        updateTodo(todo.id,{...todo , todo:todoMessage})
        setisTodoEditable(false);
    }

    const toggleIsCompleted=()=>{
        // console.log(todo.id);
        toggleComplete(todo.id)
    }
    // console.log(toggleIsCompleted());
    
    return (
        <>
            <div className={`flex border border-black/20 rounded-lg shadow-lg text-black duration-400
            ${todo.completed ? "bg-yellow-600" : "bg-teal-600"}`}>
                <input
                    type='checkbox'
                    className='cursor-pointer'
                    checked={todo.completed}
                    onChange={toggleIsCompleted}

                />
                <input
                    type='text'
                    className={`border outline-none  w-full bg-purple-100 rounded-lg 
                    ${isTodoEditable ? "border-black-100 px-2" : " border-transparent"}
                    ${todo.completed ? "line-through  " : " "}`}
                    value={todoMessage}
                    onChange={(e) => {
                        setTodoMessage(e.target.value);
                    }}
                    readOnly={!isTodoEditable}
                />
                <button
                    className='inline-flex w-8 h-8 rounded-lg justify-center items-center 
                    text-md borderborder-black/20 bg-slate-400 hover:bg-slate-500 shrink-0'
                    onClick={()=>{
                        if(todo.completed) return;
                        if(isTodoEditable){
                            editTodo();
                        }
                        else{
                            setisTodoEditable((prev)=>!prev)
                        }

                    }}
                    disabled={todo.completed}
                >
                    {isTodoEditable ? "📁" : "✏️"}
                </button>
                <button
                    className='inline-flex w-8 h-8 rounded-lg justify-center items-center 
                    text-md borderborder-black/20 bg-slate-400 hover:bg-slate-500 shrink-0'
                    onClick={()=>deleteTodo(todo.id)}
                >
                    ❌
                </button>
            </div>
        </>
    )
}

export default TodoItem
