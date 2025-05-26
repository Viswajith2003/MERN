import React from "react";
import menu from "../assets/icons/menu.png";
import Youtube from "../assets/icons/yt.png";
import search from "../assets/icons/search.png";
import mic from "../assets/icons/mic.png";
import Account from "../assets/icons/futurebeets.png";
import bell from "../assets/icons/bell.png";

export default function Navbar() {
  return (
    <div className="w-full flex bg-[#0e0e0f] text-white">
      <div className="w-1/2 h-20 bg-[#0e0e0f] pt-3 flex gap-6">
        <img className="h-6 ml-5 mt-3" src={menu} alt=" " />
        <div className="flex gap-2">
          <img className="w-14 h-12 mt-1" src={Youtube} alt="" />
          <h1 className="text-[38px]">Youtube</h1>
        </div>
      </div>

      <div className="w-full h-18 bg-[#0e0e0f] flex pt-4  gap-3">
        <div className="w-4/5 rounded-full overflow-hidden h-12 border border-solid border-gray-700 flex ">
          <input
            className="w-10/12 outline-none pl-5 text-white placeholder-gray-400 "
            type="text"
            placeholder="Search "
          />
          <button className="w-2/12 flex justify-center items-center h-full bg-[#272727]">
            <img className="h-6" src={search} alt="search" />
          </button>
        </div>
        <div className="w-12 h-12 rounded-full bg-[#272727] flex justify-center  items-center">
          <img className="h-6" src={mic} alt="mic" />
        </div>
      </div>

      <div className="w-1/2 h-18 bg-[#0e0e0f] flex gap-8 justify-end pr-5 items-center">
        <div className="w-12 h-12 flex cursor-pointer hover:bg-[#272727] transition-all duration-500 rounded-full justify-center items-center">
          <img className=" h-8" src={bell} alt="" />
        </div>
        <img className="w-10 h-10 rounded-full" src={Account} alt="" />
      </div>
    </div>
  );
}
