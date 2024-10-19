import React from 'react'

function Button({
    children,
    type = "button",
    textColor = "white",
    backgroundColor = "bg-blue-600",
    className = "",
    ...props

}) {
    return (
        <button className={`px-5 py-4 rounded-lg ${textColor} ${backgroundColor} ${className}`}
        {...props}>
            {children}
        </button>
    );
}

export default Button