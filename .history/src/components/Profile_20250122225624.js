import React, { useState, useEffect } from "react";

function SecondPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply the system theme preference on initial load
  useEffect(() => {
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(userPrefersDark);
  }, []);

  const redirectToInstagram = () => {
    window.location.href = "https://www.instagram.com/vivvek_m/"; // Replace with actual Instagram handle
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        isDarkMode
          ? "bg-gradient-to-br from-[#111111] to-[#D50032] text-white"
          : "bg-gradient-to-br from-[#00FF00] to-[#FFFFFF] text-black"
      } relative`}
    >
      {/* Squid Game Style Header */}
      <div
        className={`text-5xl font-bold mb-6 text-center ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Squid Game - Profile
      </div>

      {/* Profile Picture Holder */}
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#00FF00] mb-6 relative">
        <img
          src="/your-picture.jpg" // Replace with your actual profile image path
          alt="Profile"
          className="object-cover w-full h-full rounded-full border-4 border-[#00FF00]"
        />
      </div>

      {/* Name and Registration Number */}
      <div
        className={`text-xl mb-4 text-center ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        <p>
          Name: <strong>Vivek Kumar Sulaniya</strong>
        </p>
        <p>
          Registration Number: <strong>20232059</strong>
        </p>
      </div>

      {/* Instagram Button */}
      <button
        onClick={redirectToInstagram}
        className={`${
          isDarkMode ? "bg-[#00FF00] hover:bg-[#00CC00]" : "bg-[#FF0000] hover:bg-[#CC0000]"
        } text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105`}
        aria-label="Follow me on Instagram"
      >
        Follow me on Instagram
      </button>

      {/* Squid Game Shapes */}
      <div className="absolute top-10 left-10">
        <div className="w-24 h-24 bg-transparent border-4 border-white rounded-full animate-pulse transition-transform duration-300 transform hover:scale-110"></div>
      </div>
      <div className="absolute bottom-10 right-10">
        <div className="w-32 h-32 bg-transparent border-4 border-white border-solid transition-transform duration-300 transform hover:scale-110"></div>
      </div>
      <div className="absolute bottom-20 left-10">
        <div className="w-24 h-24 bg-transparent border-4 border-white transition-transform duration-300 transform hover:scale-110"></div>
      </div>

      {/* Toggle Button for Theme */}
      <button
        onClick={toggleTheme}
        className="absolute top-5 right-5 p-3 bg-[#FF0000] text-white rounded-full hover:bg-[#CC0000]"
        aria-label="Toggle Theme"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default SecondPage;
