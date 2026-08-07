"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaEnvelope, FaLock, FaSpinner, FaUserPlus } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // Handle Credentials Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      await signIn.email(
        {
          email,
          password,
        },
        {
          onSuccess: () => {
            toast.success("Successfully logged in!");
            router.push("/");
            router.refresh();
          },
          onError: (ctx) => {
            toast.error(ctx.error.message || "Failed to log in");
            setLoading(false);
          },
        }
      );
    } catch {
      toast.error("An unexpected error occurred");
      setLoading(false);
    }
  };

  // Handle Google Social Sign In
  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch {
      toast.error("Failed to authenticate with Google");
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-16">
      <div className="max-w-md w-full space-y-6 bg-slate-900/90 p-8 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-md">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium mb-1">
            <span>AS Builders Portal</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Welcome Back
          </h2>
          <p className="text-sm text-slate-400">
            Sign in to access your dashboard and manage projects
          </p>
        </div>

        {/* Social Auth */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={googleLoading || loading}
          className="w-full flex items-center justify-center space-x-3 bg-slate-800 hover:bg-slate-700/80 text-white font-medium py-3 px-4 rounded-xl border border-slate-700/80 transition-all focus:outline-none disabled:opacity-50 cursor-pointer shadow-sm"
        >
          {googleLoading ? (
            <FaSpinner className="animate-spin text-xl text-amber-500" />
          ) : (
            <>
              <FcGoogle className="text-xl" />
              <span className="text-sm">Continue with Google</span>
            </>
          )}
        </button>

        {/* PROMINENT SIGN UP CALLOUT BANNER */}
        <div className="p-3.5 bg-slate-950/80 rounded-xl border border-amber-500/20 flex items-center justify-between gap-3 shadow-inner">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
              <FaUserPlus className="text-sm" />
            </div>
            <div className="text-xs">
              <p className="font-semibold text-slate-200">New to AS Builders?</p>
              <p className="text-slate-400">Create a new account</p>
            </div>
          </div>
          <Link
            href="/register"
            className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-all shadow-md shadow-amber-500/10 shrink-0"
          >
            Sign Up Now
          </Link>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-2">
          <div className="border-t border-slate-800 w-full" />
          <span className="bg-slate-900 px-3 text-xs text-slate-500 uppercase tracking-widest absolute">
            Or Sign In With Email
          </span>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <FaEnvelope className="text-sm" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Password
              </label>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <FaLock className="text-sm" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || googleLoading}
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center shadow-lg shadow-amber-500/10 focus:outline-none disabled:opacity-50 cursor-pointer text-sm"
          >
            {loading ? (
              <FaSpinner className="animate-spin text-lg" />
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Footer Link (Backup) */}
        <p className="text-center text-xs text-slate-400 pt-2">
          Don&apos;t have an account yet?{" "}
          <Link
            href="/register"
            className="font-semibold text-amber-400 hover:underline transition-all"
          >
            Register here
          </Link>
        </p>

      </div>
    </div>
  );
}