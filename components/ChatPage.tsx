import React from 'react'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatBody from './ChatBody'
 
const ChatPage = ({userProfile, messages, authUser}:{userProfile:any, messages:any, authUser:any}) => {
  
  return (
    <div className='m-2 flex flex-col h-[96%] flex-[3_3_0%]'>
        <ChatHeader userProfile={userProfile}/>
        <ChatBody messages={messages} authUser={authUser}/>
        <ChatInput/>
    </div>
  )
}

export default ChatPage