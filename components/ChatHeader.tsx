'use client';
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Avatar, AvatarImage } from './ui/avatar';
import Link from 'next/link';
import { Button } from './ui/button';
import { deleteChatMessages } from '@/lib/serveractions';
import { useParams } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';


const ChatHeader = ({ userProfile }: { userProfile: any }) => {
    const { id } = useParams<{ id: string }>();
    const deleteChatMessageById = deleteChatMessages.bind(null, id);

    const userKiProfile = JSON.parse(userProfile);
 
    return (
        <div className='w-full flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Link href={"/chat"} className='p-2 cursor-pointer bg-[#E3E6E8] hover:bg-[#c7cacb] rounded-full'>
                    <IoIosArrowBack size="24px" />
                </Link>
                <div className='flex items-center gap-1 text-lg'>
                    <Avatar>
                        <AvatarImage src={userKiProfile?.profilePhoto} alt="@shadcn" />
                    </Avatar>
                    <h1 className='font-bold'>{userKiProfile?.fullname}</h1>
                </div>
            </div>
            <form action={deleteChatMessageById}>
                <SubmitButton />
            </form>
        </div>
    )
}

export default ChatHeader

const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <Button variant="destructive">
            {
                !pending ? "Clear Chat" : <Button variant={'destructive'}><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please Wait</Button>
            }
        </Button>
    )
}