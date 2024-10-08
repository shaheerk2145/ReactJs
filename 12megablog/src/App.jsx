import React from 'react'
import './App.css'

function App() {
  // console.log(process.env.VITE_APPWRITE_URL)  //for App created by create React App
  console.log(import.meta.env.VITE_APPWRITE_URL) //for App created by create vite App

  return (

    <>
      <h1>My App</h1>
    </>
  )
}

export default App
