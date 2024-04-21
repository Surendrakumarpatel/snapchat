"use server"
import { auth, signOut } from "@/auth";
import { Chat } from "@/models/chat.model";
import { Message, MessageDocument } from "@/models/message.model"
import { unstable_noStore as noStore } from "next/cache";
import {v2 as cloudinary} from "cloudinary";
import { revalidatePath } from "next/cache";
import connectDB from "./db";
import { redirect } from "next/navigation";

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})

export const sendSnapMessage = async (
    content:string,
    receiverId:string,
    messageType: "image" | "text" 
) => {
    noStore();
    try {
        const authUser = await auth(); 
        const senderId = authUser?.user?._id;
        let uploadResponse;
        if(messageType === "image"){ 
            uploadResponse = await cloudinary.uploader.upload(content)
        }
        const newMessage : MessageDocument = await Message.create({
            senderId,
            receiverId,
            content : uploadResponse?.secure_url || content,
            messageType
        });
        let chat = await Chat.findOne({
            participants:{$all:[senderId, receiverId]}
        }) 
        if(!chat){
            chat = await Chat.create({
                participants:[senderId, receiverId],
                messages:[newMessage._id],
            });
        }else{
            chat.messages.push(newMessage._id);
            await chat.save();
        }
        revalidatePath(`/chat/${receiverId}`);
        return JSON.parse(JSON.stringify(newMessage));
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const deleteChatMessages = async (userId:string) => {
    noStore();
    try {
        await connectDB();
        const authUser = await auth();
        const user = authUser?.user;
        if(!user) return ;

        const chat = await Chat.findOne({
            participants:{$all:[user._id, userId]}
        });
        if(!chat) return;

        const messageIdsInString = chat.messages.map((id)=> id.toString());

        await Message.deleteMany({_id:{$in:messageIdsInString}});
        await Chat.deleteOne({_id:chat._id});

        revalidatePath(`/chat/${userId}`); 
    } catch (error) {
        console.log(error);
        throw error;
    }
    redirect("/chat");
}
export const logoutHandler = async () => { 
    try {
        await signOut(); 
    } catch (error) {
        console.log(error);
        throw error;
        
    }
    redirect("/login");
}