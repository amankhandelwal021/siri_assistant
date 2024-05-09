import Image from "next/image";
import React from "react";
import Avatar from "../public/assets/avatar.svg";
import { signIn } from 'next-auth/react';
import { SignIn } from "./sign-in";

const Navbar = () => {
  
  return (
    <div className="flex justify-between items-center w-full">
      <div className="text-white text-2xl font-semibold font-sans tracking-widest cursor-pointer duration-300">
        {" "}
        SIRI 2.O
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
      <SignIn/>
    </div>
  );
};

export default Navbar;
