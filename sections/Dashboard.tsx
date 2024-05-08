import HomeCards from "@/components/HomeCards";
import Navbar from "@/components/Navbar";
import Prompt from "@/components/Prompt";
import React from "react";

const Dashboard = () => {
  const CardsItems = [
    {
      text: " What are tips for pro coder What are tips for pro coder What are tips for pro coder.",
    },
    {
      text: " What are tips for pro coder What are tips for pro coder What are tips for pro coder.",
    },
    {
      text: " What are tips for pro coder What are tips for pro coder What are tips for pro coder.",
    },
    {
      text: " What are tips for pro coder What are tips for pro coder What are tips for pro coder.",
    },
  ];
  return (
    <div className="flex-col px-10 py-3 bg-black w-full space-y-10 max-w-[80%]">
      <Navbar />
      <div className="flex justify-center items-center">
      <div className="flex-col justify-center items-center space-y-3">
        <div>
          <p className="gradient-text text-6xl font-semibold font-sans tracking-wide">
            Hey, Ezee
          </p>
        </div>
        <div className="text-[#3d3d3d] text-4xl font-semibold font-sans ">
          <p>
            I'm <span className="">happy to help! What can I do for you?</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-5 pt-14">
        {CardsItems.map((elem, index) => (
          <HomeCards key={index} text={elem.text} />
        ))}
      </div>
      </div>
      <div className="fixed bottom-10 left-auto ml-20 w-[70%]">
      <Prompt />
      </div>
    </div>
  );
};

export default Dashboard;
