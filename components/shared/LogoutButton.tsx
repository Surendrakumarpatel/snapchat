import React from 'react'
import { Button } from '../ui/button'
import { AiOutlineLogout } from 'react-icons/ai'
import { logoutHandler } from '@/lib/serveractions'

const LogoutButton = () => {
  
  return (
    <form action={logoutHandler}>
      <Button size={'icon'} className='rounded-full'>
        <AiOutlineLogout size="24px" />
      </Button>
    </form>
  )
}

export default LogoutButton