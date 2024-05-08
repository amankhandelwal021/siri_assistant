import HomeCards from "@/components/HomeCards";
import Navbar from "@/components/Navbar";
import Prompt from "@/components/Prompt";
import React from "react";

const Dashboard = () => {
  const CardsItems = [{}, {}, {}, {}];
  return (
    <div className="flex-col px-10 bg-black py-7 w-full space-y-10">
      <Navbar />
      <div className="flex-col justify-start items-center space-y-3">
        <div>
          <p className="gradient-text text-6xl font-semibold font-sans tracking-wider">
            Hey, Ezee
          </p>
        </div>
        <div className="text-[#3d3d3d] text-4xl font-semibold font-sans ">
          <p>
            I'm <span className="">happy to help! What can I do for you?</span>
          </p>
        </div>
      </div>
      <HomeCards />
      <Prompt />
    </div>
  );
};

export default Dashboard;
