import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let [counter,setCounter] = useState(0)


  // const addValue = () =>{
  //   counter = counter + 1
  //   setCounter(counter )
  //   console.log("clicked ", counter)
  // }


  const removeValue = () => {
   if(counter>0) {counter = counter - 1
    setCounter(counter )
    console.log(counter)}
  }


    const [counter,setCounter] = useState(0)


  const addValue = () =>{
   
    setCounter(counter +1 )
    setCounter(counter +1 )
    setCounter(counter +1 )
    setCounter(counter +1 )
    console.log("clicked ", counter)
  }


  // const removeValue = () => {
  //   setCounter(counter -1 )
  //   console.log(counter)
  // }



  return (
    <>
    <h1>Anushila</h1> 
    <h2>Counter value:{counter}</h2>

    <button
    onClick = {addValue}
    >Add value</button>
    <br />
    <br />
    <button
     onClick = {removeValue}
    >Decrease Valye</button>
    </>
  )
}

export default App
