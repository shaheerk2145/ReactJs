import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ background: color }}>
        <div className=' fixed flex justify-center flex-wrap  py-5 right-12 '>
          <div className='flex flex-wrap flex-col justify-center  shadow-lg bg-white gap-8 py-2 pb-2  px-6 rounded-xl'>
            <button
              onClick={() => {
                setColor("red");
              }}
              style={{ backgroundColor: "red" }}
              className='capitalize outline-none py-2 rounded-xl px-4 shadow-xl text-white ' >
              red
            </button>

            <button
              onClick={() => {
                setColor("blue");
              }}
              style={{ backgroundColor: "blue" }}
              className='capitalize outline-none py-2 rounded-xl px-4 shadow-xl text-white ' >
              blue
            </button>

            <button
              onClick={() => {
                setColor("orange");
              }}
              style={{ backgroundColor: "orange" }}
              className='capitalize outline-none py-2 rounded-xl px-4 shadow-xl text-white '>
              orange

            </button>

            <button
              onClick={() => {
                setColor("brown");
              }}
              style={{ backgroundColor: "brown" }}
              className='capitalize outline-none py-2 rounded-xl px-4 shadow-xl text-white '>
              brown

            </button>

            <button
              onClick={() => {
                setColor("cyan");
              }}
              style={{ backgroundColor: "cyan" }}
              className='capitalize outline-none py-2 rounded-xl px-4 shadow-xl text-black '>
              cyan

            </button>

            <button
              onClick={() => {
                setColor("purple");
              }}
              style={{ backgroundColor: "purple" }}
              className='capitalize outline-none py-2 rounded-xl px-4 shadow-xl text-white '>
              purple

            </button>

            <button
              onClick={() => {
                setColor("teal");
              }}
              style={{ backgroundColor: "teal" }}
              className='capitalize outline-none py-2 rounded-xl px-4 shadow-xl text-white '>
              teal

            </button>

            <button
              onClick={() => {
                setColor("indigo");
              }}
              style={{ backgroundColor: "indigo" }}
              className='capitalize outline-none py-2 rounded-xl px-4 shadow-xl text-white '>
              indigo

            </button>

            <button
              onClick={() => {
                setColor("green");
              }}
              style={{ backgroundColor: "green" }}
              className='capitalize outline-none py-2 rounded-xl px-4 shadow-xl text-white '>
              green

            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
