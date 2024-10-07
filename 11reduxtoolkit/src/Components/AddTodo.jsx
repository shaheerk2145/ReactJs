
// dispatch uses reduces to make changes in store
// dispatch k andr hi reducer ko call krtey hen


import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../Features/Todo/todoSlice';


const AddTodo = () => {
    const [state, setState] = useState('');
    const dispatch = useDispatch();

    const addTodolist = (e) => {
        e.preventDefault();
        dispatch(addTodo(state))
        setState('');
    }


    return (
        <>
            <form onSubmit={addTodolist} className=" border-black  space-x-2 mt-12 flex justify-center items-center mb-10 ">
                <input
                    type='text '
                    placeholder='Add todo here....'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    // className='input'
                    className="bg-gray-800 rounded border 
                     border-red-700 focus:border-indigo-500 focus:ring-2
                      focus:ring-indigo-900 outline-none
                     text-gray-100 py-3 p-4 text-xl leading-8 transition-colors duration-200 ease-in-out "
                />
                <button
                    // className='button'
                    type='submit'
                    className="text-white bg-indigo-500 border-0 py-3.5 p-7 text-2xl focus:outline-none
                     hover:bg-indigo-600 rounded text-lg"
                >
                    ADD
                </button>
            </form>
        </>
    )
}

export default AddTodo


