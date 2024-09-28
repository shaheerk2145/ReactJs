import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [Password, setPassword] = useState("")

  // useCallback(fn,dependencies) =>syntax of usecallback
  const generatePassword =useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


    if (number) {
      str = str + "0123456789"
    }
    if (character) {
      str = str + "!@#$%^&*()_{}[]:><?|~";
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char)   //if we use only "=" this will overwrite nd display only one character
      // The charAt() method in JavaScript 
      // is used to return the character at a 
      // specified index in a string.
    }
    setPassword(pass)

  }, [length, number, character, setPassword])


  // useEffect(()=>{callback function},[dependency array])
  useEffect(()=>{
    generatePassword();
  },[length, number, character,generatePassword ])


  //now to call this function 
  //if we use normal method of calling function 
  //there will be an error that is
  // Uncaught Error:
  //  Too many re-renders. 
  // React limits the number of renders to prevent an infinite loop.
  // generatePassword() => so by calling this will generate error


  const passwordRef= useRef(null);

  const copyText= useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectRange(0,20);
    window.navigator.clipboard.writeText(Password);
  },[Password])

  return (
    <>

      <div className='w-full max-w-md shadow-lg text-white bg-gray-700 rounded-lg text-center py-20 px-5 mx-auto mt-20' >
        <h1 className='text-4xl text-center text-white m-10'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-8 text-orange-700'>
          <input
            type='text'
            value={Password}
            className=' w-full outline-none px-3 py-1'
            readOnly    
            placeholder='Password'
            ref={passwordRef}
          />
          <button
            onClick={copyText}
            className='outline-none rounded-md bg-blue-800 text-white px-3 py-0.5 shadow-sm hover:bg-yellow-600'>
            Copy
          </button>
        </div>
        <div className='flex gap-x-2 text-sm'>
          <div className='flex items-center gap-x-2'>
            <input
              type='range'
              max={20}
              min={8}
              value={length}
              id='range'
              className='cursor-pointer '
              name=''
              onChange={(e)=>{
                setlength(e.target.value)
              }}
            />
            <label htmlFor=''>Length :{length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type='checkbox'
              defaultChecked={number}
              id='numberInput'
              name=''
              onChange={()=>{
                setNumber((prev)=>!prev)
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type='checkbox'
              defaultChecked={character}
              id='charInput'
              name=''
              onChange={()=>{
                setCharacter((prev)=>!prev)
              }}
            />
            <label htmlFor='charInput'>Character </label>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
