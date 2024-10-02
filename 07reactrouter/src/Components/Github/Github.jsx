import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data= useLoaderData()
    console.log(data);
    // const [data,setData] = useState();
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/shaheerk2145')
    //     .then((res)=> res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
            
    //     })

    // },[])
  return (
    <div className='bg-zinc-600 text-center text-3xl m-4  p-5 text-white  '>
    Github  : {data.login.toUpperCase() }

    <br/>
    <img src={data.avatar_url}/>
    
    </div>
  )
}

export default Github;
export const githubFinder = async()=>{
    const response= await fetch('https://api.github.com/users/shaheerk2145')
    return response.json()
    
    
}