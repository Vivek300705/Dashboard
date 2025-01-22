import React, { useState, useEffect } from "react";

function SquidGamePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPlayer, setIsPlayer] = useState(true); // Toggle between player and guard

  // Toggle between themes
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Toggle between player and guard
  const toggleRole = () => {
    setIsPlayer((prevRole) => !prevRole);
  };

  useEffect(() => {
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(userPrefersDark);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        isDarkMode
          ? "bg-black text-white"
          : "bg-gradient-to-b from-[#FF0000] to-[#111111] text-white"
      }`}
    >
      {/* Header */}
      <h1 className="text-4xl font-bold mb-8">
        {isPlayer ? "Squid Game - Player Profile" : "Squid Game - Guard Profile"}
      </h1>

      {/* Role Button */}
      <button
        onClick={toggleRole}
        className={`py-2 px-6 mb-6 rounded-lg text-lg ${
          isPlayer
            ? "bg-[#00FF00] text-black hover:bg-[#00CC00]"
            : "bg-[#FF0000] text-white hover:bg-[#CC0000]"
        } shadow-lg transition duration-300`}
      >
        Switch to {isPlayer ? "Guard" : "Player"}
      </button>

      {/* Profile Picture */}
      <div
        className={`w-40 h-40 rounded-full flex items-center justify-center mb-6 ${
          isPlayer ? "bg-[#00FF00]" : "bg-[#FF0000]"
        }`}
      >
        <div className="w-36 h-36 rounded-full border-4 border-white flex items-center justify-center">
          <img
            src={isPlayer ? "/profile-player.jpeg" : "/profile-guard.jpeg"}
            alt={isPlayer ? "Player Profile" : "Guard Profile"}
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>

      {/* Player/Guard Details */}
      <div className="text-center text-lg mb-4">
        <p>Name: <strong>Vivek Kumar Sulaniya</strong></p>
        <p>
          {isPlayer
            ? `Player Number: <strong>067</strong>`
            : `Guard Rank: <strong>Supervisor</strong>`}
        </p>
        <p>Status: {isPlayer ? "Active" : "On Duty"}</p>
      </div>

      {/* Game Progress */}
      {isPlayer && (
        <div className="w-full max-w-md bg-gray-200 rounded-full h-6 mb-6 relative">
          <div
            className="bg-green-500 h-6 rounded-full"
            style={{ width: "75%" }}
          ></div>
          <span className="absolute inset-0 flex justify-center items-center text-black font-bold">
            75% Completed
          </span>
        </div>
      )}

      {/* Decorative Shapes */}
      <div className="absolute top-10 left-10">
        <div className="w-24 h-24 bg-transparent border-4 border-white rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-10 right-10">
        <div className="w-32 h-32 bg-transparent border-4 border-white border-solid"></div>
      </div>
      <div className="absolute bottom-20 left-10">
        <div className="w-24 h-24 bg-transparent border-4 border-white"></div>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-5 right-5 p-3 bg-[#D50032] text-white rounded-full hover:bg-[#CC0033]"
        aria-label="Toggle Theme"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default SquidGamePage;
