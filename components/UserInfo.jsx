"use client"
import Image from 'next/image';
import SignInButton from './SignInButton'
import { useSession } from 'next-auth/react'
import SignInForm from './SignInForm';


const UserInfo = () => {

  const{status, data:session}= useSession();

  if (status==='authenticated'){
  return (
    <div className='text-sm shadow flex flex-col gap-3 p-4'>
        <Image src={session?.user?.image} width={50} height={50} className='rounded-full'/>
        <div>Name: <span>{session?.user?.name}</span></div>
        <div>Email: <span>{session?.user?.email}</span></div>
        <button className='bg-red-600 text-center p-2 font-bold text-white text-sm'>Logout</button>
    </div>
  )
}if(status==='loading'){
  return(
    <div>Loading.....</div>
  )
}else{

  return (
  <div className='grid place-items-center'>
    <SignInForm/>
    <SignInButton content={'Sign In with Google'}/>
  </div> 
  )
}
}

export default UserInfo