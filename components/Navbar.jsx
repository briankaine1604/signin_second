"use client"
import Link from 'next/link'
import {signIn,signOut ,useSession } from 'next-auth/react'

const Navbar = () => {
  const {status}= useSession();
  return (
    <div className='p-4 flex justify-between items-center'>
        <Link href='/'>BIK</Link>
       {status ==='authenticated' ?(
         <button onClick={()=>signOut()} className='rounded bg-black text-white px-5 py-2'>Sign Out</button>
       ):(
        <button onClick={()=>signIn('google')} className='rounded bg-black text-white px-5 py-2'>Sign In</button>
       )}
        </div>
  )
}

export default Navbar