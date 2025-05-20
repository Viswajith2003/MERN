import React, { useState } from "react";
import { bookList } from "./assets/data";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setshowMore] = useState(false);

  const nextClick = () => {
    setIndex((index + 1) % bookList.length);
  };

  const prevClick = () => {
    setIndex((index - 1 + bookList.length) % bookList.length);
  };

  const bookData = bookList[index];
  return (
    <div>
      <div style={{ display: "flex " }}>
        <button onClick={prevClick}>Prev</button>
        <button onClick={nextClick}>Next</button>
      </div>
      <h2>
        <i>{bookData.name} </i>
        by {bookData.artist}
      </h2>
      <h3>
        ({index + 1} of {bookList.length})
      </h3>
      <button
        onClick={() => {
          setshowMore(!showMore);
        }}
      >
        {showMore ? "showLess" : "showMore"}
      </button>
      {showMore && (
        <>
          <img src={bookData.url} alt={bookData.alt} />
          <p>{bookData.description}</p>
        </>
      )}
    </div>
  );
}

