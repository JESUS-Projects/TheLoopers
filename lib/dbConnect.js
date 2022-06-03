import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;
let cached = global.mongoose;

if (!MONGODB_URL) throw new Error("Cannot find MONGODB_URL in .env file");
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
    };

    cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
