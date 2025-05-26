import React from "react";
import one from "../assets/Images/1.png";
import two from "../assets/Images/2.png";
import three from "../assets/Images/3.png";
import four from "../assets/Images/4.png";
import five from "../assets/Images/5.png";
import six from "../assets/Images/6.png";
import seven from "../assets/Images/7.png";
import eight from "../assets/Images/8.png";
import nine from "../assets/Images/9.png";
import ten from "../assets/Images/10.png";
import t11 from "../assets/Images/11.png";
import futurebeets from "../assets/Icons/futurebeets.png";

const Videos = () => {
  let videos = [
    {
      title: "AI Agent For travel Agency Malayalam",
      channel: "Futurebeets",
      views: "10k",
      date: "1 month",
      channelIcon: futurebeets,
      thumbnail: one,
    },
    {
      title: "React blog website development Malayalam",
      channel: "Futurebeets",
      views: "20k",
      date: "5 Days",
      channelIcon: futurebeets,
      thumbnail: two,
    },
    {
      title: "React Hooks Tutorial for Beginners",
      channel: "Futurebeets",
      views: "15k",
      date: "2 weeks",
      channelIcon: futurebeets,
      thumbnail: three,
    },
    {
      title: "Tailwind CSS Crash Course Malayalam",
      channel: "Futurebeets",
      views: "25k",
      date: "3 weeks",
      channelIcon: futurebeets,
      thumbnail: four,
    },
    {
      title: "Building Responsive UI with Tailwind CSS",
      channel: "Futurebeets",
      views: "18k",
      date: "10 days",
      channelIcon: futurebeets,
      thumbnail: five,
    },
    {
      title: "React Router Tutorial Malayalam",
      channel: "Futurebeets",
      views: "12k",
      date: "1 week",
      channelIcon: futurebeets,
      thumbnail: six,
    },
    {
      title: "State Management in React",
      channel: "Futurebeets",
      views: "22k",
      date: "15 days",
      channelIcon: futurebeets,
      thumbnail: seven,
    },
    {
      title: "Advanced Tailwind CSS Techniques",
      channel: "Futurebeets",
      views: "17k",
      date: "8 days",
      channelIcon: futurebeets,
      thumbnail: eight,
    },
    {
      title: "React Performance Optimization",
      channel: "Futurebeets",
      views: "14k",
      date: "12 days",
      channelIcon: futurebeets,
      thumbnail: nine,
    },
    {
      title: "Building a Portfolio with React & Tailwind",
      channel: "Futurebeets",
      views: "19k",
      date: "20 days",
      channelIcon: futurebeets,
      thumbnail: ten,
    },
    {
      title: "Dummy Video Tutorial", // Dummy object as requested
      channel: "Futurebeets",
      views: "5k",
      date: "3 days",
      channelIcon: futurebeets,
      thumbnail: t11,
    },
  ];

  let tagsArr = [
    {
      tags: "All",
    },
    {
      tags: "React",
    },
    {
      tags: "Node js",
    },
    {
      tags: "Next JS",
    },
    {
      tags: "Javascript",
    },
    {
      tags: "HTML",
    },
    {
      tags: "CSS",
    },
  ];

  return <div className="w-[93%] h-[100%]"></div>;
};

export default Videos;
