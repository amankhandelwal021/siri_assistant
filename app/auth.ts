// import NextAuth from "next-auth"
// import Google from "next-auth/providers/google"
 
// export const{ handlers, signIn, signOut, auth } = NextAuth({
//   providers: [Google],
// })

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const{ handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
    }),
  ],
//   secret: process.env.AUTH_SECRET,
  // Add any additional options (callbacks, JWT configuration, etc.)
});