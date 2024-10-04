import { useState ,useEffect} from 'react'
import React from 'react';
import { ThemeProvider } from './Context/Theme';
import Card from './Components/Card';
import ThemeBtn from './Components/ThemeBtn';

function App() {
  const [themeMode,setThemeMode] = useState("light");
  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }
  // actual working
  useEffect(() => {
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  


  return (
    <>
      <ThemeProvider value={{themeMode, lightTheme,darkTheme}}>
        <div className='flex flex-wrap items-center min-h-screen'>
          <div className='w-full'>
            <div className='flex justify-end w-full max-w-sm mx-auto mb-4'>
              <ThemeBtn/> 
            </div>
            <div className='max-w-sm w-full mx-auto'>
              <Card/>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
