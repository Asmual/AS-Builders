import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // Automatic fallback to window origin if env variable is missing on client side
  baseURL:
    process.env.NEXT_PUBLIC_APP_URL ||
    (typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"),
});

export const { signIn, signUp, signOut, useSession } = authClient;