import React, { useState } from "react";


export default function Voting() {
  let [vote, setVote] = useState({ blue: 0, red: 0, green: 0, yellow: 0 });
  let blueBtn = () => {
    setVote((preVote) => {
      return { ...preVote, blue: preVote.blue + 1 };
    });
  };

  let redBtn = () => {
    setVote((preVote) => {
      return { ...preVote, red: preVote.red + 1 };
    });
  };
  let greenBtn = () => {
    setVote((preVote) => {
      return { ...preVote, green: preVote.green + 1 };
    });
  };
  let yellowBtn = () => {
    setVote((preVote) => {
      return { ...preVote, yellow: preVote.yellow + 1 };
    });
  };
  return (
    <div>
      <h1>Color Voting</h1>
      <div>
        <h2>Count : {vote.blue}</h2>
        <button
          style={{ padding: "20px", background: "blue", color: "white" }}
          onClick={blueBtn}
        >
          <b>+1</b>
        </button>
      </div>
      <div>
        <h2>Count : {vote.red}</h2>
        <button
          style={{ padding: "20px", background: "red", color: "white" }}
          onClick={redBtn}
        >
          <b>+1</b>
        </button>
      </div>
      <div>
        <h2>Count : {vote.green}</h2>
        <button
          style={{ padding: "20px", background: "green", color: "white" }}
          onClick={greenBtn}
        >
          <b>+1</b>
        </button>
      </div>
      <div>
        <h2>Count : {vote.yellow}</h2>
        <button
          style={{ padding: "20px", background: "yellow", color: "black" }}
          onClick={yellowBtn}
        >
          <b>+1</b>
        </button>
      </div>
    </div>
  );
}
