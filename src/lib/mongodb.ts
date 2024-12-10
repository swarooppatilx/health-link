import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGO_URI environment variable.');
}

export async function connectToDatabase() {
  try {
    const connection = await mongoose.connect(MONGODB_URI);
    console.log('Successfully connected to MongoDB');
    return connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to MongoDB');
  }
}
