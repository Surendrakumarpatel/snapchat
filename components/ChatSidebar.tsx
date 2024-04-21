import React, { Suspense } from 'react'; 
import LogoutButton from './shared/LogoutButton';
import SearchBar from './SearchBar';
import Friends from './Friends';
import FriendSkeleton from './FriendSkeleton';
import { auth } from '@/auth';
import { Avatar, AvatarImage } from './ui/avatar';

const ChatSidebar = async () => {
    const authUser = await auth();

    return (
        <div className='bg-white rounded-lg m-2 md:w-[25%] w-[50%] border-2 border-gray-300'>
            <div className='p-4 bg-[#E3E6E8] flex items-center justify-between border-b border-gray-300 pb-3 rounded-t-lg'>
                <div className='flex items-center gap-2'>
                    {
                        authUser && (
                            <>
                                <Avatar>
                                    <AvatarImage src={authUser.user?.image!} alt="@shadcn" />
                                </Avatar>
                                <h1 className='font-medium'>{authUser?.user?.name!}</h1>
                            </>
                        )
                    }
                </div>
                <div>
                    <LogoutButton />
                </div>
            </div>
            <div className='p-2 overflow-y-auto'>
                <SearchBar/>
                <Suspense fallback={<FriendSkeleton />}>
                    <Friends/>
                </Suspense>
            </div>
        </div>
    )
}

export default ChatSidebar