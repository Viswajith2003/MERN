import { useState } from 'react'
import './App.css'

function App() {
  // const [count ,setCount]=useState(0)
  const[text,setText]=useState("")

  const changeName=(e)=>
  {
    setText(e.target.value);
  }

  return (
    <div>
      {/* <h1>Counter working:{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Press Here</button> */}

      <input type="text" value={text} onChange={changeName}/>
      <p>Entered text is:{text}</p>
      <button onClick={()=>{setText("")}}>Reset</button>

    </div>
  )
}

export default App


