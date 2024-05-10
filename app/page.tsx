"use client";

import Dashboard from "@/sections/Dashboard";
import Sidebar from "@/sections/Sidebar";
// import { GoogleLogin } from '@react-oauth/google';


export default function Home() {

  // const responseMessage = (response: any) => {
  //   console.log(response);
  //   return true;
  // };
  // const errorMessage = (error: any) => {
  //   console.log(error);
  //   return false;
  // };

  return (
    <main className="flex w-full">
      <Sidebar />
      <Dashboard />

      {/* <GoogleLogin onSuccess={responseMessage} onError={() => errorMessage} useOneTap auto_select /> */}

      {/* {profile ? (
        <div>
          <img src={profile.picture} alt="user image" />
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀</button>
      )} */}
    </main>
  );
}
