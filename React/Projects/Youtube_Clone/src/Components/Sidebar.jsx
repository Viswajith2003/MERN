import React from "react";
import home from "../assets/icons/home.png";
import shorts from "../assets/icons/short.png";
import subscribe from "../assets/icons/subscription.png";
import user from "../assets/icons/user.png";

export default function Sidebar() {
  let menus = [
    {
      id: 1,
      icon: home,
      head: "Home",
    },
    {
      id: 2,
      icon: shorts,
      head: "Shorts",
    },
    {
      id: 3,
      icon: subscribe,
      head: "Subscriptions",
    },
    {
      id: 4,
      icon: user,
      head: "You",
    },
  ];
  return (
    <div className="w-[5%] h-screen bg-[#0e0e0f] flex flex-col items-center">
      {menus.map((item, index) => (
        <div key={item.id} className="flex flex-col items-center gap-1 mt-8">
          <img src={item.icon} alt="" className="w-8 h-8" />
          <h3 className="text-[12px] text-white">{item.head}</h3>
        </div>
      ))}
    </div>
  );
}
