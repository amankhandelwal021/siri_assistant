import Image from "next/image";
import React from "react";
import Avatar from "../public/assets/avatar.svg";
import GoogleLogin from "./GoogleLogin";

const Navbar = ({profile, setProfile}:any) => {
  
  return (
    <div className="flex justify-between items-center w-full">
      <div className="text-[#CACCC2] text-xl font-medium cursor-pointer duration-300">
        {" "}
        Gemini
      </div>
      {/* <div className="flex -space-x-1 overflow-hidden h-10 w-10 cursor-pointer duration-300">
        <Image
          className="inline-block bg-gray-300 p-1 h-full w-full rounded-full"
          src={Avatar}
          alt="logo"
          width={5}
          height={5}
        />
      </div> */}
      <GoogleLogin profile={profile} setProfile={setProfile}/>
    </div>
  );
};

export default Navbar;
