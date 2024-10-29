import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
    const URL = process.env.MONGODB_URL;
    try {
        await mongoose.connect(URL)
        .then(() => {
            console.log("Database connected successfully");
        })
    } catch (error) {
        console.log(error.message);
    }
};
export default connectDB;