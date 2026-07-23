import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import dns from "node:dns";

// Fix for Node.js DNS resolution issues in local development environments if needed
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Validate required environment variables at runtime
if (!process.env.MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

if (!process.env.BETTER_AUTH_SECRET) {
  throw new Error("Please define the BETTER_AUTH_SECRET environment variable inside .env.local");
}

const client = new MongoClient(process.env.MONGODB_URI, {
  family: 4,
});

// Database connection instance
const db = client.db("as_builders");

export const auth = betterAuth({
  database: mongodbAdapter(db, { 
    client,
  }),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
});