"use client";

import React, { useState } from "react";
import {
  Building2,
  Send,
  Calculator,
  HardHat,
  Ruler,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  FileText,
} from "lucide-react";
import toast from "react-hot-toast";

export default function QuotePage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Residential Building",
    estimatedBudget: "$50,000 - $100,000",
    projectLocation: "",
    startDate: "",
    description: "",
    servicesNeeded: [] as string[],
  });

  const projectTypes = [
    "Residential Building",
    "Commercial Complex",
    "Industrial Infrastructure",
    "Structural Design & Planning",
    "Renovation & Remodeling",
    "Project Management",
  ];

  const availableServices = [
    "Architectural Design",
    "Structural Engineering",
    "Site Supervision",
    "Cost Estimation & BOQ",
    "Soil Testing & Foundation",
    "Interior Construction",
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.servicesNeeded.includes(service);
      return {
        ...prev,
        servicesNeeded: exists
          ? prev.servicesNeeded.filter((s) => s !== service)
          : [...prev.servicesNeeded, service],
      };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Quote request submitted successfully! We will contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "Residential Building",
        estimatedBudget: "$50,000 - $100,000",
        projectLocation: "",
        startDate: "",
        description: "",
        servicesNeeded: [],
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs font-semibold tracking-wide uppercase">
            <Calculator className="h-3.5 w-3.5" /> Request A Project Estimate
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get an Accurate <span className="text-amber-500">Project Quote</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Fill out the details below and our engineering team will deliver a comprehensive project estimate.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/10 text-amber-500 rounded-lg border border-amber-500/20 shrink-0">
              <HardHat className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-xs sm:text-sm text-white">Expert Consultation</h3>
              <p className="text-[11px] text-slate-400 leading-tight">
                Insights from senior structural engineers.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/10 text-amber-500 rounded-lg border border-amber-500/20 shrink-0">
              <Ruler className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-xs sm:text-sm text-white">Precise Costing</h3>
              <p className="text-[11px] text-slate-400 leading-tight">
                Transparent BOQ and resource planning.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/10 text-amber-500 rounded-lg border border-amber-500/20 shrink-0">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-xs sm:text-sm text-white">Fast Turnaround</h3>
              <p className="text-[11px] text-slate-400 leading-tight">
                Response within 24–48 working hours.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content: Form & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left Form */}
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
            <h2 className="text-base font-bold text-white mb-4 flex items-center gap-2 border-b border-slate-800 pb-3">
              <Building2 className="h-4 w-4 text-amber-500" />
              Project Details Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Full Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone Number <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="+880 1800-000000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="AS Builders Ltd."
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              {/* Project Type & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Project Category
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Estimated Budget Range
                  </label>
                  <select
                    name="estimatedBudget"
                    value={formData.estimatedBudget}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Below $20,000">Below $20,000</option>
                    <option value="$20,000 - $50,000">$20,000 - $50,000</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                    <option value="$100,000 - $500,000">$100,000 - $500,000</option>
                    <option value="$500,000+">$500,000+</option>
                  </select>
                </div>
              </div>

              {/* Services Required Checklist */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Services Required (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {availableServices.map((service) => {
                    const isSelected = formData.servicesNeeded.includes(service);
                    return (
                      <div
                        key={service}
                        onClick={() => handleServiceToggle(service)}
                        className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-all ${
                          isSelected
                            ? "bg-amber-500/10 border-amber-500 text-amber-400"
                            : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                        }`}
                      >
                        <CheckCircle2
                          className={`h-3.5 w-3.5 ${
                            isSelected ? "text-amber-500" : "text-slate-600"
                          }`}
                        />
                        <span className="text-xs font-medium">{service}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Location & Target Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Project Location / Site Address
                  </label>
                  <input
                    type="text"
                    name="projectLocation"
                    placeholder="e.g. Cox&apos;s Bazar, Bangladesh"
                    value={formData.projectLocation}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Target Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Additional Specifications
                </label>
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Project dimensions, structural expectations..."
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 px-5 rounded-lg text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                {loading ? "Submitting Request..." : "Submit Quote Request"}
              </button>
            </form>
          </div>

          {/* Right Sidebar Info */}
          <div className="space-y-4">
            {/* Direct Contact Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
              <h3 className="text-sm font-bold text-white border-b border-slate-800 pb-2.5 flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-amber-500" />
                Direct Communication
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-amber-500 shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-200">Head Office</p>
                    <p className="text-[11px] text-slate-400">Cox&apos;s Bazar, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-amber-500 shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-200">Official Email</p>
                    <p className="text-[11px] text-slate-400">info@asbuilders.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-amber-500 shrink-0">
                    <PhoneCall className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-200">Engineering Helpline</p>
                    <p className="text-[11px] text-slate-400">+880 1800-000000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Submission Notice */}
            <div className="bg-linear-to-br from-slate-900 via-slate-900 to-amber-950/30 border border-amber-500/20 rounded-2xl p-5 shadow-xl space-y-2">
              <div className="flex items-center gap-2 text-amber-500 font-bold text-xs">
                <FileText className="h-4 w-4" />
                Have Blueprints or Drawings?
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                If you have architectural blueprints or site photos, email them directly to{" "}
                <span className="text-amber-400 font-semibold">docs@asbuilders.com</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}