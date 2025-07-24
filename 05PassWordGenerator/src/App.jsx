import { useState, useCallback, useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() =>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"

    if(characterAllowed) str += "!@#$%^&*()_+-=[]{}|<>?/"

    for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length , numberAllowed, characterAllowed, setPassword])


 const copyPassWordToClipboeard = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,5)
  window.navigator.clipboard.writeText(password)
 },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length , numberAllowed, characterAllowed,passwordGenerator])
  





  return (
    <>
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-4 my-8 bg-gray-800 text-orange-400">
    <div className="mb-2 text-lg font-semibold text-center">Generated Password</div>
    
    <div className="flex items-center justify-between border border-gray-600 rounded-md px-4 py-2 bg-gray-900">
      <input
        type="text"
        value={password}
        placeholder="Password"
        readOnly
        className="w-full bg-transparent text-white outline-none placeholder-gray-400"
        ref = {passwordRef}
      />
      <button
      onClick={copyPassWordToClipboeard}
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-105 active:scale-95"
>
  Copy
</button>

    </div>

    <div>
      <div>
        <input 
        type="range" 
        min={6}
        max= {100}
        value = {length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)
        }}
         />
         <label>length:{length} </label>
      </div>
      <div>
         <input 
        type="checkbox" 
        defaultChecked = {numberAllowed}
        id ="numberInput"
     
        onChange={() => {
          setNumberAllowed((prev) => !prev)
        }}
         />
         <label htmlFor="numberInput">Numbers</label>
      </div>
       <div>
         <input 
        type="checkbox" 
        defaultChecked = {characterAllowed}
        id ="charInput"
     
        onChange={() => {
          setCharacterAllowed((prev) => !prev)
        }}
         />
         <label htmlFor="numberInput">Charecters</label>
      </div>
    </div>
  </div>
</>

  )
}

export default App
