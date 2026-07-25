"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  Shield,
  Camera,
  Save,
  KeyRound,
  Bell,
  CheckCircle2,
} from "lucide-react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "Asmual Obaidul Hoque",
    email: "asmual@asbuilders.com",
    phone: "+880 1800-000000",
    role: "Lead Administrator",
    company: "AS Builders & Engineering",
    location: "Cox's Bazar, Bangladesh",
    bio: "Civil engineering project manager and full-stack developer passionate about building robust digital and physical infrastructures.",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Profile updated successfully!");
    }, 1000);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-white tracking-tight">Account Profile</h1>
        <p className="text-sm text-slate-400">
          Manage your personal information, security settings, and account preferences.
        </p>
      </div>

      {/* Cover & Profile Banner Card */}
      <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        {/* Cover Image Background */}
        <div className="h-48 w-full relative">
          <Image
            src="/images/Cover.jpg"
            alt="Civil Engineering Cover"
            fill
            priority
            className="object-cover"
          />
          {/* Dark Overlay Gradient for text readability */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-black/30" />
        </div>

        {/* Profile Info Header */}
        <div className="px-6 pb-6 pt-0 relative flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 -mt-16">
          <div className="flex items-end gap-5">
            <div className="relative group">
              <div className="h-28 w-28 rounded-2xl bg-slate-950 border-4 border-slate-900 flex items-center justify-center text-amber-500 text-3xl font-bold shadow-2xl overflow-hidden">
                <span className="bg-linear-to-br from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  AH
                </span>
              </div>
              <label
                htmlFor="avatar-upload"
                className="absolute inset-0 bg-black/60 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-white"
              >
                <Camera className="h-6 w-6" />
                <input type="file" id="avatar-upload" className="hidden" />
              </label>
            </div>
            <div className="mb-1">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                {formData.fullName}
                <CheckCircle2 className="h-5 w-5 text-amber-500 fill-amber-500/20" />
              </h2>
              <p className="text-sm text-slate-400 flex items-center gap-1.5 mt-0.5">
                <Shield className="h-4 w-4 text-amber-500" />
                {formData.role} • {formData.company}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Active Status
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Form: Personal Details */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <User className="h-5 w-5 text-amber-500" />
              Personal Information
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 pl-10 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 pl-10 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 pl-10 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Company / Organization
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 pl-10 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 pl-10 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">
                Professional Bio
              </label>
              <textarea
                name="bio"
                rows={3}
                value={formData.bio}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-6 py-2.5 rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20 disabled:opacity-50"
              >
                <Save className="h-4 w-4" />
                {loading ? "Saving Changes..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Security & Settings */}
        <div className="space-y-6">
          {/* Change Password Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-base font-semibold text-white flex items-center gap-2 pb-4 border-b border-slate-800 mb-5">
              <KeyRound className="h-5 w-5 text-amber-500" />
              Security & Password
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <button
                type="button"
                onClick={() => toast.success("Password updated successfully!")}
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium py-2.5 rounded-xl text-sm transition-colors border border-slate-700"
              >
                Update Password
              </button>
            </div>
          </div>

          {/* Preferences Settings */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-base font-semibold text-white flex items-center gap-2 pb-4 border-b border-slate-800 mb-5">
              <Bell className="h-5 w-5 text-amber-500" />
              Preferences
            </h3>

            <div className="space-y-3 text-sm text-slate-300">
              <label className="flex items-center justify-between cursor-pointer p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
                <span>Email Notifications</span>
                <input type="checkbox" defaultChecked className="accent-amber-500 h-4 w-4 rounded" />
              </label>
              <label className="flex items-center justify-between cursor-pointer p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
                <span>Project Status Alerts</span>
                <input type="checkbox" defaultChecked className="accent-amber-500 h-4 w-4 rounded" />
              </label>
              <label className="flex items-center justify-between cursor-pointer p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
                <span>SMS Updates</span>
                <input type="checkbox" className="accent-amber-500 h-4 w-4 rounded" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}