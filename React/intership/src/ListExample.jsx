import React, { useState } from "react";

export default function ListExample() {
  const [item, setItem] = useState([
    {
      id: 1,
      name: "Viswa",
    },
    {
      id: 2,
      name: "Jera",
    },
    {
      id: 3,
      name: "Sabari",
    },
    {
      id: 4,
      name: "Kali",
    },
    {
      id: 5,
      name: "Abhi",
    },
  ]);

  removeItem=(index)=>{
    const newItem=[...item]
    newItem.splice(index,1)
    setItem(newItem)
  }
  return (
    <div>
      <h1>Student List</h1>
      <div>
        <input type="text" defaultValue={item.name} />
        <button onClick={removeItem(index)}>Delete</button>
      </div>
      <ul>
        {item.map((item, index) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
