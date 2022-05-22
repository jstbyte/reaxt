import { connect } from 'mongoose';

/** IMPORT & DEFINE TYPES;
 * @typedef { import('mongoose').Mongoose } Mongoose;
 * @typedef { Promise<Mongoose> } MongoosePromise;
 * @typedef {{ conn: Mongoose?, promise: MongoosePromise?  }} Cached;
 * @typedef { import('mongoose').ConnectOptions } ConnectOptions;
 */

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error("MONGODB_URI is't found in .env");

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

/** @type { Cached } */
let cached;

if (!global?.cached) {
  global.cached = cached = { conn: null, promise: null };
}

/**
 * @description Connect Mongoose Database;
 * @returns { Promise<Mongoose> }
 * @example await connectMongoose();
 */
export async function connectMongoose() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    /** @type { ConnectOptions } */
    const opts = {
      bufferCommands: false,
    };

    cached.promise = connect(MONGODB_URI, opts).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
