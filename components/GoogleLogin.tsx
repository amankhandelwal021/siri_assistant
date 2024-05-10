"use client";

import React, { useEffect, useState } from "react";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from "axios";

const GoogleLogin = ({ profile, setProfile }: any) => {

  const [user, setUser] = useState<any>(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse: any) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };


  return (
    <div className="bg-[#8136f9be] hover:bg-[#a46ef9e6] cursor-pointer duration-300 flex items-center space-x-3 text-white px-4 py-2 rounded-md" onClick={() => profile ? logOut() : login()}>
      <button type="submit" className="text-sm font-sans font-semibold tracking-wider">{profile ? "Logout" : "Google Login"}</button>
    </div>
  )
}

export default GoogleLogin
