import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white");
let test = (event) => {
   console.log(event.target.backgroundColor);
}
  return (
    <div style={{backgroundColor: color}} className='w-full h-screen duration-200'>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-400' onClick={() => setColor("red")}>Red</button>
              <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-green-400' onClick={() => setColor("green")}>Green</button>
              <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-blue-400' onClick={() => setColor("blue")}>Blue</button>
            </div>
        </div>
    </div>
  )
}

export default App
