import { signIn } from '@/auth'
import Login from '@/components/Login'
import React from 'react'

const LoginPage = () => {
  const loginHandler = async () => {
    "use server"
    await signIn("github");
  }
  return (
    <form action={loginHandler}>
        <Login/>
    </form>
  )
}

export default LoginPage