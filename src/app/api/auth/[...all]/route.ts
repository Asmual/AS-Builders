import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// Force Next.js to treat this route as purely dynamic (prevents static build errors)
export const dynamic = "force-dynamic";

export const { GET, POST } = toNextJsHandler(auth);