import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-dom';
import authService from './Appwrite/auth';
import { logIn, logOut } from './store/authSlice'


function App() {
  // console.log(process.env.VITE_APPWRITE_URL)  //for App created by create React App
  // console.log(import.meta.env.VITE_APPWRITE_URL) //for App created by create vite App
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.isUserLoggedIn
      .then((data) => {
        if (data) {
          dispatch(logIn({ data }))
        } else {
          dispatch(logOut)
        }
      })
      .finally(() => (
        setLoading(false)
      ))
  }, [])


  return !loading ? (

    <>
      <div className='min-h-screen flex flex-wrap content-between bg-slate-600'>
        <div className='w-full block'>
        <Header/>
        <Footer/>

        </div>
      </div>

    </>
  ) : null
}

export default App
