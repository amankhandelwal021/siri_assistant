"use client";

import Dashboard from "@/sections/Dashboard";
import Sidebar from "@/sections/Sidebar";
import { useState, useEffect } from "react";

export default function Home() {

  const [chats, setChats] = useState<any>([]);
  const [activity, setActivity] = useState<any>([]);
  const [currentChatIndex, setCurrentChatIndex] = useState<any>(null);
  const [isNewActivity, setIsNewActivity] = useState(null);

  useEffect(() => {
    const localActivity = localStorage.getItem('activity');
    if (!localActivity) {
      setCurrentChatIndex(0)
    }
  }, []);

  return (
    <main className="flex w-full">
      <Sidebar activity={activity} setChats={setChats} setCurrentChatIndex={setCurrentChatIndex} setIsNewActivity={setIsNewActivity} />
      <Dashboard chats={chats} setChats={setChats} activity={activity} setActivity={setActivity}  currentChatIndex={currentChatIndex} isNewActivity={isNewActivity} setIsNewActivity={setIsNewActivity}/>
    </main>
  );
}
