import mongoose , {Connection} from "mongoose";

let isConnected:Connection | boolean = false;

const connectDB = async () => {
    if(isConnected){
        console.log("Mongo Already Connected");
        return isConnected;
    }
    try {
        const res = await mongoose.connect(process.env.MONGO_URI!);
        isConnected = res.connection;
        console.log("Mongo Connected Successfully.");
        return isConnected;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export default connectDB;