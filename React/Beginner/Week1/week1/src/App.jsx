import { useState } from 'react'
import './App.css'

function App() {
  // const [count ,setCount]=useState(0)
  // const[text,setText]=useState("")
  const [liked,setLiked]=useState(true)

  const changeBox=(e)=>
  {
    setLiked(e.target.checked);
  }

  return (
    <div>
      {/* <h1>Counter working:{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Press Here</button> */}

      {/* <input type="text" value={text} onChange={changeName}/>
      <p>Entered text is:{text}</p>
      <button onClick={()=>{setText("")}}>Reset</button> */}

      <input type="checkbox" checked={liked} onChange={changeBox} />i liked this
      <p>You {liked ? "liked":"did not liked"} this</p>
    </div>
  )
}

export default App


