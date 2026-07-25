"use client";

import React, { useState } from "react";
import {
  Headphones,
  Send,
  Phone,
  Mail,
  CheckCircle2,
  HelpCircle,
  MessageSquare,
} from "lucide-react";

export default function SupportPage() {
  const [formData, setFormData] = useState({
    subject: "",
    category: "general",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ subject: "", category: "general", message: "" });
    }, 4000);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="pb-2 border-b border-slate-800">
        <h1 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
          <Headphones className="h-8 w-8 text-amber-500" />
          <span>Engineer Support & Consultation</span>
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Directly consult with our lead structural engineers or report on-site updates.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Support Form */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-amber-500" />
              <span>Submit Inquiry or Site Ticket</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Our engineering team responds within 2–4 hours during site operation hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 space-y-2 flex flex-col items-center text-center">
              <CheckCircle2 className="h-10 w-10 text-emerald-400 animate-bounce" />
              <h3 className="text-base font-bold text-emerald-300">
                Ticket Submitted Successfully!
              </h3>
              <p className="text-xs text-emerald-400/80">
                Our site engineer will review your request and get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Inquiry Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="e.g. Query regarding 2nd floor column reinforcement"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="general">General Site Inquiry</option>
                  <option value="drawing">Drawing / Design Clarification</option>
                  <option value="material">Material Quality & Delivery</option>
                  <option value="billing">BOQ & Billing Query</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Detailed Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe your site query or request detailed information..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs transition-all shadow-lg shadow-amber-500/20"
              >
                <Send className="h-4 w-4" />
                <span>Send Support Ticket</span>
              </button>
            </form>
          )}
        </div>

        {/* Side Contact Info & FAQs */}
        <div className="space-y-6">
          {/* Direct Emergency Contact */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Phone className="h-5 w-5 text-amber-500" />
              <span>Direct Site Hotline</span>
            </h3>
            <p className="text-xs text-slate-400">
              Need immediate assistance regarding ongoing site casting or inspection?
            </p>
            <div className="space-y-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500">Lead Engineer Phone</p>
                  <p className="font-semibold text-slate-200">+880 1800 000 000</p>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500">Official Engineering Email</p>
                  <p className="font-semibold text-slate-200">support@asbuilders.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick FAQ Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-amber-500" />
              <span>Frequently Asked</span>
            </h3>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                <p className="font-semibold text-amber-400">How to request structural revision?</p>
                <p className="text-[11px] text-slate-400">
                  Submit a ticket under &quot;Drawing Clarification&quot; or schedule a meeting.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                <p className="font-semibold text-amber-400">When are site reports uploaded?</p>
                <p className="text-[11px] text-slate-400">
                  Inspection reports are published within 24 hours of site testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}