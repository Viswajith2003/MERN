import React, { useState } from "react";
import { bookList } from "./assets/data";

export default function Gallery() {
  const [index, setIndex] = useState(0);

  const nextClick = () => {
    setIndex(index + 1);
  };

  const bookData = bookList[index];
  return (
    <div>
      <div style={{ display: "flex " }}>
        <button
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          Prev
        </button>
        <button onClick={nextClick}>Next</button>
      </div>
      <h2>
        <i>{bookData.name} </i>
        by {bookData.artist}
      </h2>
      <img src={bookData.url} alt={bookData.alt} />
      <h3>
        ({index + 1} of {bookList.length})
      </h3>
      <p>{bookData.description}</p>
    </div>
  );
}
