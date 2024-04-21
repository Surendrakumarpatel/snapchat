import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

import { UserDocument } from '@/models/user.model'
import { Avatar, AvatarImage } from './ui/avatar'
import { VscSend } from "react-icons/vsc";
import { Loader2 } from 'lucide-react'
import { sendSnapMessage } from '@/lib/serveractions'
import { useRouter } from 'next/navigation'
 

const UserDialog = (
  {
    selectedFile,
    close,
    onPreview
  }:
    {
      selectedFile: string,
      close: () => void,
      onPreview: () => void
    }) => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sendMessageLoading, setSendMessageLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserDocument>();
  const router = useRouter();

  const selectedUserHandler = (user: UserDocument) => {
    setSelectedUser(user);
  }
  const sendMessageHandler = async () => {
    setSendMessageLoading(true);
    try {
      await sendSnapMessage(selectedFile, selectedUser?._id, 'image');
      router.push(`/chat/${selectedUser?._id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setSendMessageLoading(false);
    }
  }

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/chat/getusers');
        const data = await res.json(); 
        setUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, [])
  return (
    <Dialog open={!!selectedFile}>
      <DialogContent className="sm:max-w-[425px]" onInteractOutside={close}>
        <DialogHeader>
          <Input
            id="name"
            className="col-span-3"
            placeholder='Search user to send?'
          />
        </DialogHeader>
        <div className="grid gap-1 py-4">
          {
            users.map((user: UserDocument) => {
              return (
                <div
                  onClick={() => selectedUserHandler(user)}
                  key={user._id}
                  className={`flex ${selectedUser?._id === user._id ? 'bg-gray-200' : null} items-center gap-5 cursor-pointer p-2 rounded-md hover:bg-gray-200`}>
                  <Avatar>
                    <AvatarImage src={user.profilePhoto} alt="@shadcn" />
                  </Avatar>
                  <div>
                    <h1 className='font-medium'>{user.fullname}</h1>
                    <p className='text-sm text-gray-500'>@{user.username}</p>
                  </div>
                </div>
              )
            })
          }
          {
            loading && <div className='mx-auto'><Loader2 className="mr-2 h-4 w-4 animate-spin" /></div>
          }
        </div>
        <DialogFooter>
          <Button onClick={close} variant={'destructive'}  type="submit">Cancel</Button>
          {
            sendMessageLoading ? (
              <Button>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button disabled={!selectedUser || loading} onClick={sendMessageHandler} type="submit">Send <span className='ml-1'><VscSend size={'18px'} /></span></Button>
            )
          }
       </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default UserDialog;
