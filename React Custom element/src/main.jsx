import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function myApp() {
  return (
    <div>
      <h1>Custom App | chai</h1>
    </div>
  )


}
const element = (
  <input name='first name' placeholder='input bar' id='inputbar' />
)
const anotherElement = React.createElement(
  'a',   //tag 
  { href: 'https://www.google.com ',target: '_blank'}, //object
  'click to go to page'  //childen
)
const name = "shaheer"
const tag = React.createElement(
  'h1',
  {id:'inputbar'},
  'shaheer khan',
  name,   //variable 
)
// all this happens in backend in react
/*function customRender(createElement,mainContainer){
   const element= document.createElement(createElement.type);
  element.innerHTML = createElement.children;
  element.setAttribute('href',createElement.props.href)
  element.setAttribute('target',createElement.props.target)
  mainContainer.append(createElement); */


// another method
// const element=  document.createElement(createElement.type);
// element.innerHTML = createElement.children;
// for (const prop in createElement.props) {
//   if (prop === "children") continue;
//   document.setAttribute(prop,createElement.props[prop])
// }
// mainContainer.append(createElement); 
// } 
// const createElement= {
//   type: 'a',
//   props:{
//     href :'https://www.google.com',
//     target:'_blank'
//   },
//   children:'Click to visit the google page',

// }
// const mainContainer = document.querySelector('#root');


createRoot(document.getElementById('root')).render(
  // anotherElement 
  tag
 

)
