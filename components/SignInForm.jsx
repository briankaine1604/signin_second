import Link from 'next/link'
import React from 'react'

const SignInForm = () => {
  return (
   <section className='mb-5'>
    <form action="" className='shadow grid gap-4 p-10 border-t-4 border-blue-500 rounded'>
        <span className='font-bold'>Enter your details</span>
        <input type="text" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button href='#' className='bg-blue-500 text-white text-sm p-2 text-center'>Log In</button>
        <div className='bg-red-600 text-center font-semibold text-white text-sm'>Error Message</div>
        <Link href='/register'>Don't have an account? <span className='underline'>Register</span></Link>
    </form>
   </section>
  )
}

export default SignInForm