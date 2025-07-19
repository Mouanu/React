import { useState } from 'react'


function App() {
  const [color, setColor] = useState("green")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style = {{backgroundColor: color}}
      >

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"red"}}
          // parameters pass koranor jonno erokom bhabe chalate hobe
          // onclick er return value chai nah,, onclick er function chai
            onClick={() => setColor("red")}

            > Red</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"purple"}}
             onClick={() => setColor("purple")}
            > purple</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"blue"}}
             onClick={() => setColor("blue")}
            > Blue</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"orange"}}
             onClick={() => setColor("orange")}
            > orange</button>

          </div>
        </div>
      </div>

      
    </>
  )
}

export default App
