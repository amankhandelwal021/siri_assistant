"use client";

import HomeCards from "@/components/HomeCards";
import Navbar from "@/components/Navbar";
import Prompt from "@/components/Prompt";
import React, { useEffect, useState } from "react";
import Chat from "./Chat";

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

  const [profile, setProfile] = useState<any>(null);

  const [prompt, setPrompt] = useState<any>(null);
  const [isSearch, setIsSearch] = useState<any>(null);

  const [chats, setChats] = useState<any>([]); 

  useEffect(() => {

  }, [])

  return (
    <div className="flex-col px-10 py-3 bg-[#131314] w-full space-y-10 max-w-[80%]">
      <Navbar profile={profile} setProfile={setProfile} />

      {!isSearch ? (
        <div className="flex-col justify-center items-center mx-auto w-[850px]">
          <div className="flex-col justify-center items-center space-y-3 tracking-tighter">
            <div>
              <p className="gradient-text text-6xl font-semibold">
                Hey, {profile && profile.name ? profile.name.split(" ")[0] : "there!"}
              </p>
            </div>
            <div className="text-[#444746] text-6xl font-semibold">
              <p>
                How can I help you today?
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-10 pt-24">
            {CardsItems.map((elem, index) => (
              <HomeCards key={index} text={elem.text} setPrompt={setPrompt} />
            ))}
          </div>
        </div>
      ): (
        <Chat />
      )}


      <div className="fixed bottom-10 left-auto ml-36 w-[80%]">
        <Prompt prompt={prompt} setPrompt={setPrompt} setIsSearch={setIsSearch} />
      </div>
    </div>
  );
};

export default Dashboard;
