import Dashboard from "@/sections/Dashboard";
import Sidebar from "@/sections/Sidebar";

export default function Home() {
  return (
    <main className="flex w-full">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
