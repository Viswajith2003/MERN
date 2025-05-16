import React, { useEffect, useState } from "react";

export default function Factgenerator() {
  let [fact, setFact] = useState({});

  let URL = "https://uselessfacts.jsph.pl//api/v2/facts/random";

  let getFacts = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    // console.log(jsonResponse.text)
    setFact({ text: jsonResponse.text });
  };

  useEffect(() => {
    async function getFirstFact() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      // console.log(jsonResponse.text)
      setFact({ text: jsonResponse.text });
    }
    getFirstFact();
  }, []);

  return (
    <div>
      <h1>New Facts</h1>
      <h3>{fact.text}</h3>
      <button onClick={getFacts} style={{ padding: "20px" }}>
        <b>Submit</b>
      </button>
    </div>
  );
}
