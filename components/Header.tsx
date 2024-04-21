import React from 'react'
import { Button } from './ui/button';
import MyAiPhoto from "@/public/myai-asset.png"
import Image from 'next/image';
import { MdOutlineLaptop } from "react-icons/md";
import { auth } from '@/auth';
import { PiChatCircleDots } from "react-icons/pi";
import Link from 'next/link';

const Header = async () => {
  const authUser = await auth();

  return (
    <div className='flex justify-between items-center max-w-6xl mx-auto'>
      <div>
        <h1 className='text-7xl font-medium'>Snapchat is <br /> now on the <br /> web!</h1>
        <h1 className='my-5 text-xl '>Chat, Snap, and video call your friends from <br /> wherever you are.</h1>
        {
          authUser ? (
            <Link href={"/chat"}><Button className='rounded-full gap-2'><PiChatCircleDots size="24px" /> <span>Start Chat</span> </Button></Link>
          ) :
            (
              <Link href={"/login"}><Button className='rounded-full gap-2'><MdOutlineLaptop /> <span>Login to chat</span> </Button></Link>
            )
        }
      </div>
      <div className='hidden md:block'>
        <Image src={MyAiPhoto} width={650} height={650} alt="myai" />
      </div>
    </div>
  )
}

export default Header