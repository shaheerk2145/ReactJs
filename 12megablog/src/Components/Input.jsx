import React from 'react';
import { useId } from 'react';

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = '',
    ...props
}, ref) {
    const id = useId();
    return (
        <>
            <div className='w-full'>
                {label && <label
                    className='inline-block m-1 p-3'
                    htmlFor={id}
                >
                    {label}
                </label>}
                <input
                    className={`px-3 py-3 rounded-lg text-black bg-slate-100
                     focus:bg-gray-100 border border-gray-300 w-full  duration-150 ${className}`}
                    ref={ref}
                    {...props}
                    id={id}
                />
            </div>
        </>
    )
})

export default Input
