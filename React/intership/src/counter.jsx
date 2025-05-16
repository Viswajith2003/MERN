import React, { useEffect, useState } from "react";

export default function () {
  let [count, setCount] = useState(0);

  useEffect(function printConsole() {
    console.log("Print side effect");
  });

  return (
    <div>
      <h1>Counter : {count}</h1>
      <br />
      <button
        style={{ padding: "10px", border: "2px solid black" }}
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>
    </div>
  );
}
