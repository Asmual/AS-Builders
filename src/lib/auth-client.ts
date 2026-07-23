import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
});

// Export clean helper functions/hooks for frontend components
export const { signIn, signUp, signOut, useSession } = authClient;