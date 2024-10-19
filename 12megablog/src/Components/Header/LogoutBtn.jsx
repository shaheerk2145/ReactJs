import React from 'react'
import { useDispatch } from 'react-redux';
import authService from '../../Appwrite/auth';
import { logOut } from '../../store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();
    const logOutHandler = () => {
        authService.logout
            .then(() => {
                dispatch(logOut())
            })
    }
    return (
        <>
            <button onClick={logOutHandler}
                className='px-6 py-6 duration-300 inline-block bg-blue-500 text-white
       hover:bg-amber-600'
            >Log Out

            </button>
        </>
    )
}

export default LogoutBtn
