import React, { useState } from "react";
import { FiSearch, FiBell, FiSettings, FiMenu, FiX } from "react-icons/fi";
import WorkOut from "./WorkOut";

const DashboardLayout = () => {
  const menuItems = [
    { name: "Overview", icon: "📊" },
    { name: "Workout", icon: "💪" },
    { name: "Diet Plan", icon: "🥗" },
    { name: "Goals", icon: "🎯" },
    { name: "My Schedule", icon: "📅" },
    { name: "Progress", icon: "📈" },
  ];

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col md:flex-row bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-gradient-to-b from-indigo-800 via-purple-800 to-fuchsia-700 text-white shadow-2xl border-r border-white/10 fixed h-screen">
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-amber-400 to-pink-500 flex items-center justify-center shadow-md">
            <span className="text-white font-bold">F</span>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Fitness</h1>
            <p className="text-xs text-white/70">Dashboard</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-auto px-3 py-4">
          <ul className="space-y-2">
            {menuItems.map((m, i) => (
              <li key={m.name}>
                <button
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-150 ${
                    i === 0
                      ? "bg-white/20 shadow-md border border-white/20"
                      : "hover:bg-white/10"
                  }`}
                >
                  <span
                    className={`text-lg ${
                      i === 0 ? "text-yellow-300" : "text-white"
                    }`}
                  >
                    {m.icon}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      i === 0 ? "text-yellow-200" : "text-white/90"
                    }`}
                  >
                    {m.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="px-4 py-4 border-t border-white/10">
          <div className="flex items-center gap-3 bg-white/10 rounded-lg p-2 hover:bg-white/20 transition">
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center text-white font-semibold">
              U
            </div>
            <div>
              <div className="text-sm font-medium">User Name</div>
              <div className="text-xs text-white/70">View Profile</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Drawer Sidebar */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex">
          <div className="w-64 bg-gradient-to-b from-indigo-800 via-purple-800 to-fuchsia-700 text-white shadow-xl h-full flex flex-col">
            {/* Header with Close Button */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-amber-400 to-pink-500 flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <h1 className="text-lg font-semibold">Fitness</h1>
              </div>
              <button
                className="text-white hover:text-yellow-300 transition"
                onClick={() => setDrawerOpen(false)}
              >
                <FiX className="text-2xl" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-auto px-3 py-4">
              <ul className="space-y-2">
                {menuItems.map((m, i) => (
                  <li key={m.name}>
                    <button
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-150 ${
                        i === 0
                          ? "bg-white/20 shadow-md border border-white/20"
                          : "hover:bg-white/10"
                      }`}
                    >
                      <span
                        className={`text-lg ${
                          i === 0 ? "text-yellow-300" : "text-white"
                        }`}
                      >
                        {m.icon}
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          i === 0 ? "text-yellow-200" : "text-white/90"
                        }`}
                      >
                        {m.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="px-4 py-4 border-t border-white/10">
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-2 hover:bg-white/20 transition">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center text-white font-semibold">
                  U
                </div>
                <div>
                  <div className="text-sm font-medium">User Name</div>
                  <div className="text-xs text-white/70">View Profile</div>
                </div>
              </div>
            </div>
          </div>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setDrawerOpen(false)}></div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Top Navbar */}
        <header className="fixed top-0 left-0 md:left-64 right-0 z-40 bg-gradient-to-r from-indigo-800 via-purple-800 to-fuchsia-700 text-white shadow-md border-b border-white/10">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Good Morning 👋
              </h2>
              <p className="text-sm text-white/80">
                Welcome back! Let’s make today productive.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-[420px] md:w-[480px]">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <button className="p-2 rounded-md hover:bg-white/10 transition">
                <FiBell className="text-white text-lg" />
              </button>
              <button className="p-2 rounded-md hover:bg-white/10 transition">
                <FiSettings className="text-white text-lg" />
              </button>

              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-pink-400 to-violet-600 flex items-center justify-center text-white font-semibold cursor-pointer hover:opacity-90 transition">
                DP
              </div>

              {/* Hamburger for Mobile */}
              <button
                className="md:hidden p-2 ml-1 rounded-md hover:bg-white/10 transition"
                onClick={() => setDrawerOpen(true)}
              >
                <FiMenu className="text-white text-xl" />
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto pt-[120px] sm:pt-[100px] md:pt-[90px] pb-8 px-4 sm:px-8">
          <WorkOut />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
