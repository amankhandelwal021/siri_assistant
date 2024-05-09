import React from "react";
import { PiMicrophoneFill } from "react-icons/pi";
import { LuImagePlus } from "react-icons/lu";

const Prompt = () => {
  return (
    <div className="flex items-center justify-start space-x-5 bg-[#2e302fcf] px-7 py-2 w-[70%] rounded-full">
      <input
        type="text"
        placeholder="Enter your prompt here..."
        className="placeholder:text-[#8d8d8f] outline-none bg-transparent w-full text-white"
      />
      <div className="flex justify-center items-center space-x-2">
        <div className="text-[#C4C7C5] flex items-center space-x-2 hover:text-white hover:bg-[#444746] hover:cursor-pointer duration-300 p-2.5 rounded-full">
          <PiMicrophoneFill className="text-2xl" />
        </div>{" "}
        <div className="text-[#C4C7C5] flex items-center space-x-2 hover:text-white hover:bg-[#444746] hover:cursor-pointer duration-300 p-2.5 rounded-full">
          <LuImagePlus className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Prompt;
