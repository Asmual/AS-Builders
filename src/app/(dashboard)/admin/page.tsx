import Link from "next/link";
import {
  FolderKanban,
  Users,
  Building2,
  TrendingUp,
  Plus,
  ArrowUpRight,
  Clock,
} from "lucide-react";

export default function AdminDashboardPage() {
  const stats = [
    {
      name: "Total Projects",
      value: "12",
      change: "+2 this month",
      icon: Building2,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      name: "Active Clients",
      value: "8",
      change: "100% active",
      icon: Users,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      name: "Ongoing Construction",
      value: "5",
      change: "On Schedule",
      icon: FolderKanban,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      name: "Total Revenue",
      value: "৳ 45.2L",
      change: "+12.5%",
      icon: TrendingUp,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
  ];

  const recentProjects = [
    {
      id: "1",
      name: "3-Storey Residential Building",
      client: "Kamal Hossain",
      location: "Cox's Bazar",
      progress: 65,
      status: "In Progress",
    },
    {
      id: "2",
      name: "Commercial Complex Layout",
      client: "Chowdhury Group",
      location: "Chittagong",
      progress: 30,
      status: "Structure Phase",
    },
    {
      id: "3",
      name: "Duplex Villa Engineering",
      client: "Dr. Rafiqul Islam",
      location: "Dhaka",
      progress: 90,
      status: "Finishing Work",
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Admin Control Center
          </h1>
          <p className="text-sm text-slate-400">
            Manage construction projects, client requests, and site updates.
          </p>
        </div>
        <Link
          href="/admin/projects"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl shadow-lg shadow-amber-500/20 transition-all text-sm cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          <span>New Project</span>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {stat.name}
                </span>
                <div className={`p-2.5 rounded-xl border ${stat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-slate-400 mt-1">{stat.change}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Projects Table */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <h2 className="font-bold text-white flex items-center gap-2 text-base">
            <Building2 className="h-5 w-5 text-amber-500" />
            <span>Active Engineering Projects</span>
          </h2>
          <Link
            href="/admin/projects"
            className="text-xs font-semibold text-amber-500 hover:text-amber-400 flex items-center gap-1 transition-colors"
          >
            <span>View All</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-950/60 text-xs text-slate-400 font-semibold uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="px-6 py-3.5">Project Name</th>
                <th className="px-6 py-3.5">Client</th>
                <th className="px-6 py-3.5">Location</th>
                <th className="px-6 py-3.5">Progress</th>
                <th className="px-6 py-3.5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {recentProjects.map((project) => (
                <tr
                  key={project.id}
                  className="hover:bg-slate-800/40 transition-colors"
                >
                  <td className="px-6 py-4 font-semibold text-white">
                    {project.name}
                  </td>
                  <td className="px-6 py-4 text-slate-300">{project.client}</td>
                  <td className="px-6 py-4 text-slate-400">{project.location}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-24 bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                        <div
                          className="bg-amber-500 h-2 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-slate-300">
                        {project.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Clock className="h-3 w-3" />
                      {project.status}
                    </span>
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