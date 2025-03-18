import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/todoapp";

const connectDB = async () => {
  try {
    // Check if already connected (readyState 1 means connected)
    if (mongoose.connection.readyState === 1) {
      console.log("⚡️ Already connected to MongoDB.");
      return;
    }

    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;

