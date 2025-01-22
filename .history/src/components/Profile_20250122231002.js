import React, { useState } from "react";

function SquidGamePage() {
  const [isPlayer, setIsPlayer] = useState(true);

  const toggleRole = () => {
    setIsPlayer((prevRole) => !prevRole);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF0000] to-[#111111] text-white">
      {/* Navbar */}
      <nav className="w-full py-4 px-6 bg-gray-800 sticky top-0 flex justify-between items-center">
        <div className="text-xl font-bold">Squid Game</div>
        <ul className="flex space-x-4 text-sm">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Profile</li>
          <li className="hover:underline cursor-pointer">Settings</li>
          <li className="hover:underline cursor-pointer">Logout</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Left Section - Profile */}
          <div className="lg:w-1/3 flex flex-col items-center lg:items-start">
            <div
              className={`w-40 h-40 rounded-full mb-6 ${
                isPlayer ? "bg-[#00FF00]" : "bg-[#FF0000]"
              }`}
            >
              <img
                src={isPlayer ? "/player-profile.jpeg" : "/guard-profile.jpeg"}
                alt={isPlayer ? "Player" : "Guard"}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-center lg:text-left">
              <p>
                Name: <strong>Vivek Kumar Sulaniya</strong>
              </p>
              <p>
                {isPlayer
                  ? "Player Number: 067"
                  : "Guard Rank: Supervisor"}
              </p>
              <p>Status: {isPlayer ? "Active" : "On Duty"}</p>
            </div>
          </div>

          {/* Right Section - Interactive Elements */}
          <div className="lg:w-2/3 flex flex-col items-center lg:items-start">
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

            {/* Game Progress Bar */}
            <div className="w-full max-w-lg bg-gray-300 rounded-full h-6 mb-6 relative">
              <div
                className={`h-6 rounded-full ${
                  isPlayer ? "bg-green-500" : "bg-red-500"
                }`}
                style={{ width: isPlayer ? "75%" : "50%" }}
              ></div>
              <span className="absolute inset-0 flex justify-center items-center text-black font-bold">
                {isPlayer ? "75% Completed" : "50% Duty Completed"}
              </span>
            </div>

            {/* Shapes Section */}
            <div className="flex space-x-4 justify-center lg:justify-start">
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
