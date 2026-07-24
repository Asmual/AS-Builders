import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI;

<<<<<<< HEAD
if (!uri) {
  throw new Error("MONGODB_URI is not set in environment variables");
}

const options = {
  maxPoolSize: 10,
=======
const uri = process.env.MONGODB_URI || "";
const options: MongoClientOptions = {
  family: 4, // Prevents IPv6 resolution timeouts on Vercel
>>>>>>> 88219eb293d6a626697caf41455c41197d563530
};

let clientPromise: Promise<MongoClient>;

declare global {
   
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!uri && process.env.NODE_ENV === "production") {
  console.warn("MONGODB_URI is not defined in environment variables.");
}

if (process.env.NODE_ENV === "development") {
<<<<<<< HEAD

=======
>>>>>>> 88219eb293d6a626697caf41455c41197d563530
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
<<<<<<< HEAD
  const client = new MongoClient(uri, options);
=======
  client = new MongoClient(uri || "mongodb://localhost:27017", options);
>>>>>>> 88219eb293d6a626697caf41455c41197d563530
  clientPromise = client.connect();
}

export default clientPromise;