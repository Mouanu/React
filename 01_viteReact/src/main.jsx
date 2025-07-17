import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// const anotherElement = (
//   <a hreg="https://google.com" target="_blanck">Visit Google</a>
// )

const anotherUser = "Mouli"

const reactElement = React.createElement(
  "a",
  {href: "https://google.com",
    target:"_blank"
  },
  `Click me to visit Google `,
  anotherUser // this is called evaluated espression
  //tree hoyar pore variables gulo directly ekhane inject hoy
)

createRoot(document.getElementById('root')).render(
  reactElement
)
