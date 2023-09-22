"use client"

import Image from "next/image"
import { signIn } from "next-auth/react"

const SignInButton = ({content}) => {

  return (
    <button onClick={()=>signIn('google')} className="flex gap-4 shadow items-center justify-center rounded-lg p-5 px-10">
      
      <span>{content}</span>
      <Image src='/images/googleLogo.png' height={30} width={30} />
    </button>
  )
}

export default SignInButton