"use client";

import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
import { FiMessageSquare } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const Sidebar: any = ({ activity, setChats, setCurrentChatIndex, setIsNewActivity }: any) => {
  const [searchCount, setSearchCount] = useState(5);

  const startNewChat = () => {
    setChats([]);
    localStorage.removeItem("chats");
    setCurrentChatIndex(activity.length);
    setIsNewActivity(true);
  };

  return (
    <div className="w-[20%] bg-[#1E1F20] h-screen px-7 py-5">
      <GiHamburgerMenu className="text-white text-xl hover:cursor-pointer" />

      <button
        className="text-[#666667] flex items-center space-x-3 bg-[#1A1A1C] px-4 py-2 rounded-full mt-16"
        onClick={() => startNewChat()}
      >
        <GoPlus className="text-lg font-extrabold" />
        <p className="text-sm font-semibold">New Chat</p>
      </button>

      <div className="mt-7 h-[330px] space-y-2">
        {activity && activity.length > 0 && (
          <p className="text-white  text-sm pl-3">Recent</p>
        )}
        <div
          className={`space-y-1 ${searchCount > 5 ? "max-h-72" : "max-h-44"
            } overflow-scroll no-scrollbar duration-300`}
        >
          {activity &&
            activity.length > 0 &&
            (activity.length > 5
              ? activity
                .slice(0, searchCount)
                .map((search: any, index: number) => (
                  <div
                    className="text-[#C4C7C5] flex items-center space-x-2 hover:text-white hover:bg-[#444746] hover:cursor-pointer duration-300 py-1 px-3 rounded-full"
                    onClick={() => {
                      setChats(search.chats);
                      setCurrentChatIndex(index)
                    }}
                  >
                    <FiMessageSquare className="text-xl" />
                    <p className="text-sm line-clamp-1 font-medium">
                      {search.recent}
                    </p>
                  </div>
                ))
              : activity.map((search: any, index: number) => (
                <div
                  className="text-[#C4C7C5] flex items-center space-x-2 hover:text-white hover:bg-[#444746] hover:cursor-pointer duration-300 py-1 px-3 rounded-full"
                  onClick={() => {
                    setChats(search.chats);
                    setCurrentChatIndex(index)
                  }}
                >
                  <FiMessageSquare className="text-xl" />
                  <p className="text-sm line-clamp-1 font-medium">
                    {search.recent}
                  </p>
                </div>
              )))}
        </div>
        {activity && activity.length > 5 && (
          <div
            className="flex items-center text-[#C4C7C5] text-sm space-x-4 hover:text-white hover:bg-[#444746] hover:cursor-pointer duration-300 py-2 px-3 w-fit rounded-full mt-3"
            onClick={() =>
              searchCount > 5 ? setSearchCount(5) : setSearchCount(10)
            }
          >
            <FaChevronDown />
            <p>{searchCount > 5 ? "Show Less" : "Show More"}</p>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-3 mt-20  cursor-pointer duration-300">
        <IoSettingsSharp className="text-lg" />
        <p className="font-medium">Settings</p>
      </div>
      <div className="text-xs font-medium leading-5	mt-5">
        <p>
          {" "}
          • Bhagwanpura, Alwar, Rajasthan, India
          <span className="text-[#96C7FA]">
            {" "}
            Based on your places (Home) • Update location
          </span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
