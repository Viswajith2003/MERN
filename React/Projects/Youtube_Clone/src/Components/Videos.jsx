import React from "react";
import { TagsArr, VidoContent } from "../Data/media.js";
export default function Videos() {
  return (
    <div className="w-[100%] h-[100%]">
      <div className="flex gap-3 items-center pl-5 mt-5 overflow-x-auto">
        {TagsArr.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center hover:bg-white hover:text-black cursor-pointer px-6 py-3 rounded-[10px] bg-[#272727]"
          >
            <h1 className="text-[18px]">{item.tags}</h1>
          </div>
        ))}
      </div>

      <div className="w-[100%] h-auto flex gap-10 mt-8 ml-8 flex-wrap ">
        {VidoContent.map((item, index) => (
          <div key={index} className="w-[370px] h-[300px]">
            <img
              className="w-[370px] h-[220px] rounded-lg"
              src={item.thumbnail}
              alt=""
            />
            <div className="flex gap-2 mt-2">
              <div className="">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src={item.channelIcon}
                  alt=""
                />
              </div>
              <div className="text-white">
                <h1 className="font-semibold">{item.title}</h1>
                <p className="text-[0.9rem] text-[#838383]">{item.channel}</p>
                <div className="flex gap-1 text-[#838383] text-[0.9rem]">
                  <p>{item.views} views</p>
                  <p>.</p>
                  <p>{item.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
