import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    // Debugging ke liye — kaunse server se connect hua?
    console.log(`MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);

  } catch (error) {
    console.log('MongoDB connection FAILED:', error);
    process.exit(1);  // App band karo — aage chalne ka koi fayda nahi
  }
};

export default connectDB;