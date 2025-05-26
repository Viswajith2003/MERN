import React from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

export default function Main() {
  return (
    <div className=" w-[100%] flex h-auto min-h-[88vh] bg-black">
      <Sidebar />
      <div>
        <Videos />
      </div>
    </div>
  );
}
