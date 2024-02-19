import mongoose from "mongoose";
import dotenv from "dotenv";

//ENV configuration
dotenv.config();

export function dbConnection(){
    let mongo_url=process.env.MONGO_URL;
    try {
        mongoose.connect(`${mongo_url}`);
        console.log("Database connection Successfully");
    } catch (error) {
        console.log(error.message);
    }
}