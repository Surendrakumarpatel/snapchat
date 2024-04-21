import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";

const Signup = () => {
  return (
    <div>
      <h1 className='text-center text-2xl font-medium my-2'>Sign Up to Snapchat</h1>
      <Button className='w-full my-4 gap-2'><FaGithub size="24px"/> Sign up with Github</Button>
      <p>Already have an account? <Link href="/login" className='underline'>Login</Link></p>
    </div>
  )
}

export default Signup