import mongoose from "mongoose";

export const ConnectMongoDB= async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongDB")
    }catch(error){
        console.log("Error connecting to Database: ",error)
    }
}