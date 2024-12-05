import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env");
}

// Extend the NodeJS global object to include a mongoose property
declare global {
  var mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Mongoose> | null;
  };
}

// Ensure the `global.mongoose` variable is defined
global.mongoose = global.mongoose || { conn: null, promise: null };

async function connectDB() {
  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    const opts = {
      bufferCommands: false,
    };

    global.mongoose.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    global.mongoose.conn = (await global.mongoose.promise).connection;
  } catch (error) {
    global.mongoose.promise = null;
    throw error;
  }

  return global.mongoose.conn;
}

export default connectDB;
