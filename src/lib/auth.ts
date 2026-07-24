import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);


if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not set in environment variables");
}

const client = new MongoClient(process.env.MONGODB_URI, {
  family: 4,
});

export const auth = betterAuth({
  database: mongodbAdapter(client.db("as_builders"), {
    client,
  }),

  secret: process.env.BETTER_AUTH_SECRET as string,

  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",

  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "client",
        input: true,
      },
    },
  },
});