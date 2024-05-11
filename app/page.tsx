"use client";

import Dashboard from "@/sections/Dashboard";
import Sidebar from "@/sections/Sidebar";
import { useState } from "react";

export default function Home() {

  const [activity, setActivity] = useState<any>([]);

  return (
    <main className="flex w-full">
      <Sidebar activity={activity} />
      <Dashboard setActivity={setActivity} />
    </main>
  );
}
