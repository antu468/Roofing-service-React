import { useState } from 'react'
import './App.css'
import bg from "./assets/image 13.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-1 items-center justify-center flex">
        <img src={bg} alt="background" />
      </div>
    </>
  )
}

export default App
