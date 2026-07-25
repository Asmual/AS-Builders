"use client";

import React, { useState } from "react";
import {
  FolderKanban,
  Plus,
  Search,
  Filter,
  Building2,
  Calendar,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";
import toast from "react-hot-toast";

export default function AdminProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const projects = [
    {
      id: "PRJ-101",
      name: "Cox's Bazar Sea Tower",
      client: "Chittagong Real Estate",
      category: "Commercial Complex",
      status: "In Progress",
      budget: "$450,000",
      progress: 65,
      deadline: "2026-12-15",
    },
    {
      id: "PRJ-102",
      name: "Green Valley Residence",
      client: "Rahman Developers",
      category: "Residential Building",
      status: "Planning",
      budget: "$180,000",
      progress: 20,
      deadline: "2027-03-30",
    },
    {
      id: "PRJ-103",
      name: "Karnafuli Industrial Hub",
      client: "Apex Manufacturing",
      category: "Industrial",
      status: "Completed",
      budget: "$850,000",
      progress: 100,
      deadline: "2026-05-10",
    },
    {
      id: "PRJ-104",
      name: "Hillside Resort Bridge",
      client: "Eco Tourism Corp",
      category: "Infrastructure",
      status: "In Progress",
      budget: "$320,000",
      progress: 45,
      deadline: "2026-11-20",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "All" || project.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="h-3 w-3" /> Completed
          </span>
        );
      case "In Progress":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Clock className="h-3 w-3 animate-spin" /> In Progress
          </span>
        );
      case "Planning":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <AlertCircle className="h-3 w-3" /> Planning
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 pb-10">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <FolderKanban className="h-6 w-6 text-amber-500" /> Project Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Monitor, edit, and create new civil engineering projects.
          </p>
        </div>

        <button
          onClick={() => toast.success("New Project Modal Opening...")}
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20"
        >
          <Plus className="h-4 w-4" /> Add New Project
        </button>
      </div>

      {/* Filters and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-4 rounded-2xl">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search project or client..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 pl-10 text-xs text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <Filter className="h-4 w-4 text-slate-400" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
          >
            <option value="All">All Statuses</option>
            <option value="In Progress">In Progress</option>
            <option value="Planning">Planning</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4 hover:border-slate-700 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-semibold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  {project.id}
                </span>
                <h3 className="text-base font-bold text-white">{project.name}</h3>
                <p className="text-xs text-slate-400 flex items-center gap-1">
                  <Building2 className="h-3.5 w-3.5 text-slate-500" /> {project.client}
                </p>
              </div>
              {getStatusBadge(project.status)}
            </div>

            {/* Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Progress</span>
                <span className="text-white font-semibold">{project.progress}%</span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="bg-amber-500 h-full transition-all duration-500"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            {/* Details & Actions */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <div className="space-y-1">
                <p className="text-slate-500 text-[11px]">Budget</p>
                <p className="font-semibold text-slate-200">{project.budget}</p>
              </div>

              <div className="space-y-1 text-right">
                <p className="text-slate-500 text-[11px]">Deadline</p>
                <p className="font-medium text-slate-300 flex items-center gap-1 justify-end">
                  <Calendar className="h-3 w-3 text-slate-500" /> {project.deadline}
                </p>
              </div>

              <div className="flex items-center gap-1 border-l border-slate-800 pl-3">
                <button
                  onClick={() => toast.success("View Details")}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <Eye className="h-4 w-4" />
                </button>
                <button
                  onClick={() => toast.success("Edit Project")}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800"
                >
                  <Edit className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}