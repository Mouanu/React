import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card.jsx"

function App() {
  const [count, setCount] = useState(0)
  let myobject = {
    username:"Anu",
    age: 21
  }

  let myarr = [1,2,3,4,5,6]
  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl'> Tailwind test</h1>
       <Card name = "Anushila" btnText = "dude follow me"/>
      <Card name = "Mouli" />
      <Card name ="Durga" btnText = "hello"/>
    </>
  )
}

export default App
