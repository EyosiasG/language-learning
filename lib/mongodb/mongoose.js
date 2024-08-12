import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(!isConnected){
        console.log("MongoDB is already connected")
        return
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'LanguageLearning',
            serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
            socketTimeoutMS: 45000,
        })

        isConnected = true;
        console.log("MongDB is connected");
    }catch(error){
        console.log(error);
    }
}

