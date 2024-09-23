import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}
// const reactelement={
//   type:'a',
//   props:{
//     href:'https://google.com',
//     target:'_blank'
//   },
//   children:'Click me to visit google'
// }
const reactelement = React.createElement("a", {
  href: "https://google.com",
  target: "_blank",
},
'click me to visit google'

);

const anotherelement=(
  <a href="https://google.com" target='_blank'>Visit google</a>
)

createRoot(document.getElementById('root')).render(
    // <MyApp />
    // anotherelement,
    // reactelement,
   <App/> 
)
