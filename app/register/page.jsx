"use client"
import Image from 'next/image';
import SignInButton from '@components/SignInButton';
import { useSession } from 'next-auth/react'
import Link from 'next/link';
import { useState } from 'react';




const Page = () => {

  const{status, data:session}= useSession();
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [name,setName]= useState("");
  const [error,setError]= useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();

    if (!name||!email||!password){
       setError("All fields required");
       return;
    }

    try{
       const res=  await fetch('http://localhost:3000/api/user',{// fetch from API then
        method:"POST",// specify if it is to POST,GET, .....etc
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({// Convert name and email that we destructured to string
            name,email,password
        })
    })
    if (res.ok){// if everything goes alright then return the user
        const form= e.target;
        form.reset();
    }else{
        console.log("User Registration Failed")
    }
    }catch(error){
        console.log("Error during Registration",error)
    }
  }

  if (status==='authenticated'){
  return (
    <div className='text-sm shadow flex flex-col gap-3 p-4'>
        <Image src={session?.user?.image} width={50} height={50} className='rounded-full'/>
        <div>Name: <span>{session?.user?.name}</span></div>
        <div>Email: <span>{session?.user?.email}</span></div>
    </div>
  )
}if(status==='loading'){
  return(
    <div>Loading.....</div>
  )
}else{

  return (
    <div className='grid place-items-center border h-screen -mb-10'>
    <section >
    <form onSubmit={handleSubmit} action="" className='shadow grid gap-4 p-10 border-t-4 border-blue-500 rounded'>
        <span className='font-bold'>Register</span>
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Full Name' className='border' />
        <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Email' />
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' />
        <button href='#' className='bg-blue-500 text-white text-sm p-2 text-center'>Register</button>
       {error && ( <div className='bg-red-600 text-center font-semibold text-white text-sm'>{error}</div>)}
        <Link href='#'>Already Have an Account? Sign In</Link>
    </form>
    
   </section>
   <SignInButton content={'Continue with google'}/>
   </div> 
  )
}
}

export default Page