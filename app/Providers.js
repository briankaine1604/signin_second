"use client"

import {SessionProvider, SessionProviders} from "next-auth/react"

const NextAuthProvider = ({children}) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default NextAuthProvider