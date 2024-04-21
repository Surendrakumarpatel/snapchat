import { signIn } from '@/auth'
import Signup from '@/components/Signup'
import React from 'react'

const SignupPage = () => {
  async function authAction(){
    "use server"
    await signIn("github");
  }
  return (
    <form action={authAction}>
        <Signup/>
    </form>
  )
}

export default SignupPage