import React, { useState, useEffect } from "react";

function SquidGamePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPlayer, setIsPlayer] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const toggleRole = () => {
    setIsPlayer((prevRole) => !prevRole);
  };

  useEffect(() => {
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(userPrefersDark);
  }, []);

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-gradient-to-b from-[#FF0000] to-[#111111] text-white"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`w-full py-4 px-6 flex items-center justify-between ${
          isDarkMode ? "bg-gray-900" : "bg-gray-800"
        }`}
      >
        <button
          onClick={toggleTheme}
          className="py-2 px-4 bg-red-500 rounded-lg hover:bg-red-600"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          {/* Left Column - Profile Picture and Details */}
          <div className="flex flex-col items-center lg:w-1/3">
            <div
              className={`w-40 h-40 rounded-full mb-4 ${
                isPlayer ? "bg-[#00FF00]" : "bg-[#FF0000]"
              }`}
            >
              <img
                src={isPlayer ? "/profile-player.jpeg" : "/profile-guard.jpeg"}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-center text-lg">
              <p>Name: <strong>Vivek Kumar Sulaniya</strong></p>
              <p>
                {isPlayer
                  ? `Player Number: <strong>067</strong>`
                  : `Guard Rank: <strong>Supervisor</strong>`}
              </p>
              <p>Status: {isPlayer ? "Active" : "On Duty"}</p>
            </div>
          </div>

          {/* Right Column - Interactive Elements */}
          <div className="lg:w-2/3 flex flex-col items-center lg:items-start mt-6 lg:mt-0">
            {/* Role Button */}
            <button
              onClick={toggleRole}
              className={`py-3 px-6 mb-6 text-lg font-semibold rounded-lg ${
                isPlayer
                  ? "bg-green-500 text-black hover:bg-green-600"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
            >
              Switch to {isPlayer ? "Guard" : "Player"}
            </button>

            {/* Game Progress */}
            {isPlayer && (
              <div className="w-full max-w-lg bg-gray-200 rounded-full h-6 mb-6 relative">
                <div className="bg-green-500 h-6 rounded-full" style={{ width: "75%" }}></div>
                <span className="absolute inset-0 flex justify-center items-center text-black font-bold">
                  75% Completed
                </span>
              </div>
            )}

            {/* Decorative Shapes */}
            <div className="flex space-x-4">
              <div className="w-16 h-16 bg-transparent border-4 border-white rounded-full"></div>
              <div className="w-16 h-16 bg-transparent border-4 border-white"></div>
              <div className="w-16 h-16 bg-transparent border-4 border-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SquidGamePage;
