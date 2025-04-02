import { useState } from 'react'
import './App.css'

function App() {
  const [count ,setCount]=useState(0)

  return (
    <div>
      <h1>Counter working:{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Press Here</button>
    </div>
  )
}

export default App
