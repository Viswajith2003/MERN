import React from "react";
import menu from "../assets/icons/menu.png";
import Youtube from "../assets/icons/yt.png";
import search from "../assets/icons/search.png";
import mic from "../assets/icons/mic.png";
import Account from "../assets/icons/futurebeets.png";
import bell from "../assets/icons/bell.png";

export default function Navbar() {
  return (
    <div className="w-[100%] h-[100vh] bg-black flex text-white">
      <div className="w-[60%] h-[8%] bg-[#0e0e0f] pt-3 flex gap-6">
        <img className="h-[50%] ml-5 mt-3" src={menu} alt=" " />
        <div className="flex gap-2">
          <img className="w-14 h-12 mt-1" src={Youtube} alt="" />
          <h1 className="text-[2.2rem]">Youtube</h1>
        </div>
      </div>

      <div className="w-[100%] h-[8%] bg-[#0e0e0f] flex pt-4  gap-3">
        <div className="w-[80%] rounded-[50px] overflow-hidden h-[50px] border border-solid border-gray-700 flex ">
          <input
            className="w-[90%] outline-none pl-[20px] text-white placeholder-gray-400 "
            type="text"
            placeholder="Search "
          />
          <button className="w-[10%] flex justify-center items-center h-full bg-[#272727]">
            <img className="h-[20px]" src={search} alt="search" />
          </button>
        </div>
        <div className="w-[50px] h-[50px] rounded-full bg-[#272727] flex justify-center  items-center">
          <img className="h-[20px] " src={mic} alt="mic" />
        </div>
      </div>

      <div className="w-[60%] h-[8%] bg-[#0e0e0f] flex gap-2 justify-end pr-[20px] items-center">
        <div className="w-[50px] mr-5 h-[50px] flex cursor-pointer hover:bg-[#272727] transition-all duration-500 rounded-full justify-center items-center">
          <img className=" h-[30px]" src={bell} alt="" />
        </div>
        <img className="w-[40px] h-[40px] rounded-full" src={Account} alt="" />
      </div>
    </div>
  );
}
