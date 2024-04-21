import { auth } from '@/auth';
import ChatPage from '@/components/ChatPage'
import { getMessages, getUserProfile } from '@/lib/userdata'
import React from 'react'

const ChattingPage = async ({params}:{params:{id:string}}) => {
  let userProfile = await getUserProfile(params.id);
  userProfile = JSON.stringify(userProfile);
  const authUser = await auth();
  const messages = authUser ? await getMessages(authUser?.user?._id, params.id) : [];
 
  return (
    <div className = 'w-[72%]'>
        <ChatPage userProfile={userProfile} messages={messages} authUser={authUser}/>
    </div>
  )
}

export default ChattingPage