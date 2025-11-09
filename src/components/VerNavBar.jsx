import React from "react";

const VerNavBar = () => {
  const menuItems = [
    { name: "Overview", icon: "📊" },
    { name: "Workout", icon: "💪" },
    { name: "Diet Plan", icon: "🥗" },
    { name: "Goals", icon: "🎯" },
    { name: "My Schedule", icon: "📅" },
    { name: "Progress", icon: "📈" },
  ];

  return (
    <div className="flex">
      {/* Desktop Vertical Navbar */}
      <div className="hidden md:flex flex-col w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-lg">
        {/* Header with Logo and Fitness Heading */}
        <div className="flex items-center p-6 border-b border-gray-700">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Fitness
          </h1>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button className="w-full flex items-center px-4 py-3 text-left rounded-lg transition-all duration-200 hover:bg-gray-700 hover:translate-x-1 group">
                  <span className="text-xl mr-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="font-medium text-gray-200 group-hover:text-white">
                    {item.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile/Footer */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center px-4 py-3 rounded-lg bg-gray-700/50">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">U</span>
            </div>
            <div>
              <p className="text-sm font-medium">User Profile</p>
              <p className="text-xs text-gray-400">View Account</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 z-50">
        <nav className="flex justify-around items-center p-2">
          {menuItems.slice(0, 4).map((item, index) => (
            <button
              key={index}
              className="flex flex-col items-center p-2 rounded-lg transition-colors duration-200 hover:bg-gray-700 flex-1 mx-1"
            >
              <span className="text-xl mb-1">{item.icon}</span>
              <span className="text-xs text-gray-300">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Top Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-700 z-50 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-2">
              <span className="text-white font-bold">F</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Fitness
            </h1>
          </div>
          <button className="p-2 rounded-lg bg-gray-700">
            <span className="text-xl">⚙️</span>
          </button>
        </div>
      </div>

      {/* Content Area Padding for Mobile */}
      <div className="flex-1 md:ml-0 pb-16 md:pb-0 pt-16 md:pt-0">
        {/* Your main content goes here */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome to Fitness App
          </h2>
          <p className="text-gray-600 mt-2">
            Select a section from the navigation to get started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerNavBar;
