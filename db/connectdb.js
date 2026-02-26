import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    // Return early if already connected
    if (mongoose.connections[0].readyState) {
      console.log("MongoDB already connected");
      return;
    }
    const conn = await mongoose.connect(`mongodb://localhost:27017/matcha`, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of hanging
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    throw error;
  }
}

export default connectDB;