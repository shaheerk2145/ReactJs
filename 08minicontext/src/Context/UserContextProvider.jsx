import React from 'react'
import { useState } from 'react'
import UserContext from './UserContext'

function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    return (
        <>
        {/* UserContext.Provider makes "user" and "setUser" available to all its children */}
            <UserContext.Provider value={{user,setUser}} >
                {children} {/*This will render any child components passed to UserContextProvider */}
            </UserContext.Provider>
        </>
    )
}

export default UserContextProvider