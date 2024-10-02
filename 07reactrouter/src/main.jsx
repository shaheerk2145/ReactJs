import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import User from './Components/User/User.jsx';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx';
import './index.css'
import Github, { githubFinder } from './Components/Github/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path:'/', 
//     element:<Layout/>,
//     children:[
//       {
//         path:"home",
//         element:"<Home/>"
//       },
//       {
//         path:"about",
//         element:"<About/>"
//       },
//       {
//         path:"contact",
//         element:"<Contact/>"
//       },
//       ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userID' element={<User/>}/>
      <Route path='github' element={<Github/>} loader={githubFinder}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
