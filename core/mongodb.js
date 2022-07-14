import { MongoClient } from 'mongodb';

/** IMPORT & DEFINE TYPES;
 * @typedef { import('mongodb').MongoOptions } MongoOptions;
 */

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error("MONGODB_URI is't found in .env");

/** @type { MongoOptions } */
const options = {};

/** @type { MongoClient } */
let client;

/** @type { Promise<MongoClient> } */
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(MONGODB_URI, options);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.

export const connectMongoClint = async () => await clientPromise;
