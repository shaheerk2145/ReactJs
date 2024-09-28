import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'


function App() {
  const [count, setCount] = useState(0);
  const object = {
    name:"shaheer khan",
    seat:"B20102145",
    iD:"202020"
  }
  let arr = [1,2,3,4,5,6,7,8]

  return (
    <>
      <h1 className='bg-yellow-400 text-black p-8 rounded-xl mb-10'>Shaheer khan</h1>
      
      {/* <Card channel="lumber one" prop={object} attribute={arr} /> */}
      <Card location = "Cardiiff City , Cardiff" plot="Farmhouse" rating="4.1"/>
      <Card location = "Towns Street, Nottingam" plot="GuestHouse"  btntxt="Details here"/>
    </>
  )
}

export default App
