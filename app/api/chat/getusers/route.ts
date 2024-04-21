import { auth } from "@/auth"
import connectDB from "@/lib/db";
import { User, UserDocument } from "@/models/user.model";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const authUser = await auth();
        if(!authUser) return ;
        await connectDB();
        
        const users:UserDocument[] = await User.find({_id:{$ne:authUser?.user?._id}});
        // const filteredUsers = users.filter((user)=>{
        //     return user._id.toString() !== authUser?.user?._id.toString();
        // });
        return NextResponse.json(users);
    } catch (error) {
        console.log(error);
        throw error;
    }
}