import { use, useState } from 'react'
import './App.css'

function App() {
  // const [count ,setCount]=useState(0)
  // const[text,setText]=useState("")
  // const [liked,setLiked]=useState(false)
  const [theame,setTheame]=useState(true);

  const changeBg=()=>{
    setTheame(!theame);
  }

  const style=()=>({
    background: theame ? "white" : "black",
    border: theame ? "2px solid red" : "2px solid yellow",
  })
 

  return (
    
    <div >
      {/* <h1>Counter working:{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Press Here</button> */}

      {/* <input type="text" value={text} onChange={changeName}/>
      <p>Entered text is:{text}</p>
      <button onClick={()=>{setText("")}}>Reset</button> */}

      {/* <input type="checkbox" checked={liked} onChange={e=>setLiked(e.target.checked)} />i liked this
      <p>You {liked ? "liked":"did not liked"} this</p> */}
      <div className='changeingBg' style={style()}>

      </div>
      <button onClick={changeBg}>Switch-Theame</button>
    </div>
  )
}

export default App


