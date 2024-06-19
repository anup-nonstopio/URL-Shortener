import mongoose from "mongoose";

async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully");
    }
    catch (error) {
        console.log("Error connecting to database", error);
    }
};

export default dbConnect;