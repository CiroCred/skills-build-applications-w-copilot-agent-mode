import mongoose from 'mongoose';
// Database configuration for OctoFit Tracker
// Uses octofit_db on local MongoDB by default
export const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';
export async function connectDatabase() {
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB:', MONGO_URI);
        return conn;
    }
    catch (err) {
        console.error('MongoDB connection error:', err);
        throw err;
    }
}
export default mongoose;
