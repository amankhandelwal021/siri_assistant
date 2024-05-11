"use client";

import HomeCards from "@/components/HomeCards";
import Navbar from "@/components/Navbar";
import Prompt from "@/components/Prompt";
import React, { useEffect, useRef, useState } from "react";
import Chat from "./Chat";

const Dashboard = ({ setActivity }: any) => {
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

  const chatContainerRef = useRef<any>(null);

  const [profile, setProfile] = useState<any>(null);

  const [prompt, setPrompt] = useState<any>(null);
  const [isSearch, setIsSearch] = useState<any>(null);

  const [chats, setChats] = useState<any>([]);

  useEffect(() => {
    const localChats = localStorage.getItem('chats');

    if (localChats) {
      let parsedChats = JSON.parse(localChats);
      setChats(parsedChats)
    }
  }, []);

  useEffect(() => {
    if (chats.length > 0 && chats.length === 1) {
      setActivity((prevState: any) => [...prevState, {
        recent: chats[0].prompt,
        chats: chats
      }])

    const localActivity = localStorage.getItem('activity');

    if (localActivity) {
      let parsedActivity = JSON.parse(localActivity);
      parsedActivity = [...parsedActivity, {
        recent: chats[0].prompt,
        chats: chats
      }];
      localStorage.setItem('activity', JSON.stringify(localActivity));
    } else {
      localStorage.setItem("activity", JSON.stringify(
        [{
          recent: chats[0].prompt,
          chats: chats
        }]
      ));
    }
  }
  }, [chats])

  const response = "I'm Gemini, the best way to directly access Google AI. I'm trained on large amounts of publicly available data and I can communicate and generate human-like text in response to a wide range of questions. Let me know if you'd like to learn more, or just try me out and see what I can do for you."

  useEffect(() => {
    if (isSearch) {
      setChats((prevState: any) => [...prevState,
      {
        prompt: prompt,
        response: response,
        isLive: true
      }
      ]);

      const localChats = localStorage.getItem('chats');

      if (localChats) {
        let parsedChats = JSON.parse(localChats);
        parsedChats = [...parsedChats, {
          prompt: prompt,
          response: response,
          isLive: false
        }];
        localStorage.setItem('chats', JSON.stringify(parsedChats));
      } else {
        localStorage.setItem("chats", JSON.stringify(
          [{
            prompt: prompt,
            response: response,
            isLive: false
          }]
        ));
      }

      setPrompt("")
      setIsSearch(false);

      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
  }, [isSearch, prompt]);

  return (
    <div className="flex-col px-10 py-3 bg-[#131314] w-full space-y-10 max-w-[80%]">
      <Navbar profile={profile} setProfile={setProfile} />

      {!isSearch && chats.length === 0 ? (
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
      ) : (
        <div className="h-[500px] overflow-scroll no-scrollbar space-y-12" ref={chatContainerRef}>
          {chats.map((chat: any, index: any) => (
            <Chat chat={chat} />
          ))}
        </div>
      )}

      <div className="fixed bottom-10 left-auto ml-36 w-[80%]">
        <Prompt prompt={prompt} setPrompt={setPrompt} setIsSearch={setIsSearch} />
      </div>
    </div>
  );
};

export default Dashboard;
