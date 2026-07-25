"use client";

import React, { useState } from "react";
import {
  Users,
  UserPlus,
  Search,
  Mail,
  Phone,
  Building,
  MoreVertical,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Trash2,
} from "lucide-react";
import toast from "react-hot-toast";

export default function ClientManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const clients = [
    {
      id: "CL-01",
      name: "Tanvir Rahman",
      company: "Chittagong Real Estate",
      email: "tanvir@cre.com",
      phone: "+880 1711-223344",
      activeProjects: 2,
      totalSpent: "$630,000",
      status: "Active",
    },
    {
      id: "CL-02",
      name: "Rafiqul Islam",
      company: "Apex Manufacturing",
      email: "rafiq@apex.com",
      phone: "+880 1819-556677",
      activeProjects: 1,
      totalSpent: "$850,000",
      status: "Active",
    },
    {
      id: "CL-03",
      name: "Sharmin Sultana",
      company: "Eco Tourism Corp",
      email: "sharmin@ecotours.bd",
      phone: "+880 1912-334455",
      activeProjects: 1,
      totalSpent: "$320,000",
      status: "Inactive",
    },
  ];

  const filteredClients = clients.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-10">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Users className="h-6 w-6 text-amber-500" /> Client Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            View, onboard, and manage registered client directory.
          </p>
        </div>

        <button
          onClick={() => toast.success("Add Client Modal Opening...")}
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20"
        >
          <UserPlus className="h-4 w-4" /> Add New Client
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search client name or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 pl-10 text-xs text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>
      </div>

      {/* Clients Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 font-semibold uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-4">Client Name</th>
                <th className="p-4">Company</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Projects</th>
                <th className="p-4">Total Value</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredClients.map((client) => (
                <tr key={client.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 font-semibold text-white">
                    {client.name}
                    <span className="block text-[10px] text-slate-500 font-normal">
                      ID: {client.id}
                    </span>
                  </td>

                  <td className="p-4">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Building className="h-3.5 w-3.5 text-amber-500" />
                      {client.company}
                    </span>
                  </td>

                  <td className="p-4 space-y-0.5">
                    <p className="flex items-center gap-1 text-slate-400 text-[11px]">
                      <Mail className="h-3 w-3 text-slate-500" /> {client.email}
                    </p>
                    <p className="flex items-center gap-1 text-slate-400 text-[11px]">
                      <Phone className="h-3 w-3 text-slate-500" /> {client.phone}
                    </p>
                  </td>

                  <td className="p-4 font-semibold text-slate-200">
                    {client.activeProjects} Active
                  </td>

                  <td className="p-4 font-bold text-amber-500">
                    {client.totalSpent}
                  </td>

                  <td className="p-4">
                    {client.status === "Active" ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <CheckCircle2 className="h-3 w-3" /> Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-400 border border-slate-700">
                        <XCircle className="h-3 w-3" /> Inactive
                      </span>
                    )}
                  </td>

                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => toast.success(`Viewing ${client.name}`)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                        title="View Details"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => toast.error(`Delete ${client.name}`)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-800"
                        title="Delete Client"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}