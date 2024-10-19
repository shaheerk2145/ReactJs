import React from 'react'
import { useId } from 'react'

function Select({
    label,
    className = '',
    options,
    ...props
}) {
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className='' >{label}</label>}
            <select
                {...props}
                id='id'
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black 
                outline-none focus:bg-gray-50 duration-200 border
                border-gray-200 w-full ${className}`}
            >
                {options?.map((options) => (
                    <options value={options} key={options} >
                        {options}
                    </options>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select);