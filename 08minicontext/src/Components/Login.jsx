import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext)  // Get the setUser function from context
    //     Uses the useContext hook to access the UserContext.
    //     Destructures setUser from the context value.
    //     Now, you have access to setUser within your component.

    const HandleSubmit = (e) => {

        setUser({ username, password });     // Set the user context with the provided values
        // Calls setUser with an object containing username and password,
        //  updating the context's user state.
    }


    return (
        <>
            <h2>Login Section</h2>
            <input
                
                type='text'
                placeholder='Enter Username '
                id='username'
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
                value={username}
                autoComplete='off'
            />
            <br/>
            <input
                type='password'
                placeholder='Enter Password '
                id='password'
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                autoComplete='off'
            />
            <br/>
            <button
                onClick={HandleSubmit}
            >
                Submit
            </button>
        </>
    )
}

export default Login