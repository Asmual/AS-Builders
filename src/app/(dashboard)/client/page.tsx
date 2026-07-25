import Link from "next/link";
import { Building2, FileText, Headphones, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export default function ClientDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-md relative overflow-hidden">
        <div className="relative z-10 space-y-2 max-w-xl">
          <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-semibold rounded-full border border-amber-500/30">
            Project Overview
          </span>
          <h1 className="text-2xl font-bold">Welcome to Your Construction Portal</h1>
          <p className="text-slate-300 text-sm">
            Track your building design, structural drawings, estimation reports, and site work updates in real-time.
          </p>
        </div>
      </div>

      {/* Main Active Project Card */}
      <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs text-amber-600 font-semibold uppercase tracking-wider">Active Site Work</span>
            <h2 className="text-xl font-bold text-slate-900">3-Storey Residential Building Project</h2>
          </div>
          <Link
            href="/client/my-projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors"
          >
            <span>View Full Details</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-semibold text-slate-700">Overall Construction Progress</span>
            <span className="font-bold text-amber-600">65% Completed</span>
          </div>
          <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
            <div className="bg-amber-500 h-3 rounded-full transition-all duration-500" style={{ width: "65%" }} />
          </div>
        </div>

        {/* Status Milestones */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
            <div>
              <p className="text-xs text-emerald-700 font-semibold">Architectural Design</p>
              <p className="text-sm font-bold text-slate-900">Approved</p>
            </div>
          </div>

          <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg flex items-center gap-3">
            <Clock className="h-6 w-6 text-amber-600 shrink-0" />
            <div>
              <p className="text-xs text-amber-700 font-semibold">Current Phase</p>
              <p className="text-sm font-bold text-slate-900">Roof Casting & Wall Work</p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-3">
            <Building2 className="h-6 w-6 text-slate-500 shrink-0" />
            <div>
              <p className="text-xs text-slate-500 font-semibold">Next Milestone</p>
              <p className="text-sm font-bold text-slate-900">Plumbing & Electrical</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/client/my-projects"
          className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-md transition-all flex items-center gap-4 group"
        >
          <div className="p-3 bg-amber-100 text-amber-600 rounded-lg group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900">Structural Drawings & BOQ</h3>
            <p className="text-xs text-slate-500">Download cost estimations and approved plan files.</p>
          </div>
        </Link>

        <Link
          href="/client/support"
          className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-md transition-all flex items-center gap-4 group"
        >
          <div className="p-3 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
            <Headphones className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900">Support & Site Consultation</h3>
            <p className="text-xs text-slate-500">Directly contact structural engineers or report site issues.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}