import React from "react";
import { PiMicrophoneFill } from "react-icons/pi";
import { LuImagePlus } from "react-icons/lu";

const Prompt = () => {
  return (
    <div className="flex items-center justify-start space-x-5 bg-[#2e302fcf] px-7 py-4 w-[70%] rounded-full">
      <input
        type="text"
        placeholder="Enter your prompt here..."
        className="placeholder:text-[#8d8d8f] outline-none bg-transparent w-full text-white"
      />
      <div className="flex justify-center items-center space-x-4">
     <PiMicrophoneFill  className='text-xl text-white'/>
     <LuImagePlus  className='text-xl text-white'/>
     </div>
    </div>
  );
};

export default Prompt;
