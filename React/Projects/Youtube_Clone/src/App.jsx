import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import NotFound from "./Pages/Not-found";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
