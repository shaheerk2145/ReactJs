import { useState } from 'react';
import React from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(10);
  // [variable,function that controls this variable] =>useState working
  // useState(0) => inside bracket will be the default value 

  // let counter = 15;
  const addValue = () => {
    // console.log("clicked" ,counter );
    if (counter >= 20) {
      alert("please stop")
    } else {
      counter = counter + 1;
      setCounter(counter);
    }
  }
  const subValue = () => {
    console.log("clicked" ,counter );
    if (counter === 0) {
      alert("please stop")
    } else {
      counter = counter - 1;
      setCounter(counter);
    }

  }

  return (
    <>

      <h1>Counter </h1>

      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Increment</button>
      <button onClick={subValue}>Decrement</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
