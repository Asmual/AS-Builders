"use client";

import React, { useState } from "react";
import {
  Building2,
  FileText,
  Download,
  Calendar,
  MapPin,
  CheckCircle2,
  Clock,
  Layers,
} from "lucide-react";

export default function MyProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projectDetails = {
    title: "3-Storey Residential Building Project",
    location: "Cox's Bazar, Bangladesh",
    startDate: "Jan 15, 2026",
    estimatedCompletion: "Dec 2026",
    progress: 65,
    status: "In Construction",
  };

  const documents = [
    {
      name: "Architectural Floor Plan & Elevation",
      type: "PDF",
      size: "12.4 MB",
      category: "drawings",
      date: "Feb 10, 2026",
    },
    {
      name: "Structural Layout & Column Detailing",
      type: "PDF",
      size: "18.1 MB",
      category: "drawings",
      date: "Mar 02, 2026",
    },
    {
      name: "Bill of Quantities (BOQ) & Cost Estimation",
      type: "XLSX",
      size: "4.5 MB",
      category: "estimation",
      date: "Mar 15, 2026",
    },
    {
      name: "Soil Test & Foundation Safety Report",
      type: "PDF",
      size: "8.2 MB",
      category: "reports",
      date: "Jan 20, 2026",
    },
  ];

  const filteredDocs =
    selectedCategory === "all"
      ? documents
      : documents.filter((doc) => doc.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <Building2 className="h-8 w-8 text-amber-500" />
            <span>My Active Project</span>
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Access structural blueprints, BOQ reports, and track construction progress.
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold w-fit">
          <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
          <span>{projectDetails.status}</span>
        </div>
      </div>

      {/* Main Project Overview Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
              Project Profile
            </span>
            <h2 className="text-2xl font-bold text-white">
              {projectDetails.title}
            </h2>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-amber-500" />
                {projectDetails.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-amber-500" />
                Started: {projectDetails.startDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-amber-500" />
                Est. Completion: {projectDetails.estimatedCompletion}
              </span>
            </div>
          </div>

          {/* Overall Completion Box */}
          <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 flex flex-col justify-between space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-medium text-slate-300">Construction Phase</span>
              <span className="font-bold text-amber-500">65% Completed</span>
            </div>
            <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-800">
              <div
                className="bg-amber-500 h-3 rounded-full transition-all duration-500 shadow-sm shadow-amber-500/50"
                style={{ width: "65%" }}
              />
            </div>
            <p className="text-[11px] text-slate-400">
              Current work: <span className="text-slate-200 font-semibold">2nd Floor Roof Slab Casting</span>
            </p>
          </div>
        </div>

        {/* Work Milestones */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 shrink-0" />
            <div>
              <p className="text-[11px] font-medium text-emerald-500/80">Foundation Work</p>
              <p className="text-xs font-bold text-emerald-300">100% Completed</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center gap-3">
            <Clock className="h-6 w-6 shrink-0" />
            <div>
              <p className="text-[11px] font-medium text-amber-500/80">Structural Frame</p>
              <p className="text-xs font-bold text-amber-300">65% In Progress</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center gap-3">
            <Layers className="h-6 w-6 shrink-0" />
            <div>
              <p className="text-[11px] font-medium text-blue-400/80">Finishing & Fitting</p>
              <p className="text-xs font-bold text-blue-300">Pending Phase</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Documents Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FileText className="h-5 w-5 text-amber-500" />
              <span>Approved Blueprints & BOQ Files</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Download structural drawings, estimations, and legal approval reports.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-start sm:self-auto">
            {["all", "drawings", "estimation", "reports"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                  selectedCategory === cat
                    ? "bg-amber-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Documents Table / List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDocs.map((doc, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-amber-500/40 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-amber-500 group-hover:border-amber-500/40 transition-colors shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-200 truncate group-hover:text-amber-400 transition-colors">
                    {doc.name}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-1">
                    <span>{doc.type}</span>
                    <span>•</span>
                    <span>{doc.size}</span>
                    <span>•</span>
                    <span>{doc.date}</span>
                  </div>
                </div>
              </div>

              <button
                title="Download File"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-400 border border-slate-800 transition-all shrink-0 ml-2"
              >
                <Download className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}