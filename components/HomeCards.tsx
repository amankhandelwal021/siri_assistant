import React from "react";
import { MdLightbulb } from "react-icons/md";

const HomeCards = ({text}:any) => {
  return (
    <div className="box-content bg-[#1E1F20] space-y-5 p-4 rounded-xl text-white cursor-pointer duration-300 h-40 flex-col flex justify-start items-start w-[175px] hover:bg-[#444746c4]">
      <div className="text-sm text-whiteline-clamp-7 h-40">
        <p>
         {text}
        </p>
      </div>
      <div className="bg-black p-2 rounded-full w-fit">
        <MdLightbulb className="text-2xl" />
      </div>
    </div>
  );
};

export default HomeCards;
