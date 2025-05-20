import React, { useState } from "react";

export default function ListExample() {
  const [items, setItems] = useState([
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

  const removeItem = (index) => {
    const newItem = [...items];
    newItem.splice(index, 1);
    setItems(newItem);
  };
  return (
    <div>
      <h1>Student List</h1>

      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input type="text" defaultValue={item.name} />
            <button onClick={()=>removeItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

