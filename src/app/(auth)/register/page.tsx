"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp, signIn } from "@/lib/auth-client";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaUser, FaEnvelope, FaLock, FaSpinner } from "react-icons/fa";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // Handle Credentials Sign Up
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);
    try {
      await signUp.email(
        {
          name,
          email,
          password,
        },
        {
          onSuccess: () => {
            toast.success("Account created successfully!");
            router.push("/");
            router.refresh();
          },
          onError: (ctx) => {
            toast.error(ctx.error.message || "Failed to create account");
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
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-24">
      <div className="max-w-md w-full space-y-8 bg-slate-900/80 p-8 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-md">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Join AS Builders to manage your projects
          </p>
        </div>

        {/* Social Auth */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={googleLoading || loading}
          className="w-full flex items-center justify-center space-x-3 bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-4 rounded-lg border border-slate-700 transition-all focus:outline-none disabled:opacity-50"
        >
          {googleLoading ? (
            <FaSpinner className="animate-spin text-xl" />
          ) : (
            <>
              <FcGoogle className="text-xl" />
              <span>Continue with Google</span>
            </>
          )}
        </button>

        <div className="relative flex items-center justify-center my-4">
          <div className="border-t border-slate-800 w-full" />
          <span className="bg-slate-900 px-3 text-xs text-gray-500 uppercase tracking-widest absolute">
            Or
          </span>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5" onSubmit={handleRegister}>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <FaUser />
              </div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <FaEnvelope />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <FaLock />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 8 characters"
                className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || googleLoading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center shadow-lg shadow-yellow-500/10 focus:outline-none disabled:opacity-50"
          >
            {loading ? <FaSpinner className="animate-spin text-xl" /> : "Sign Up"}
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-yellow-500 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}