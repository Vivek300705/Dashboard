import React, { useState, useEffect } from "react";

// Define a keyframe animation for scaling zoom effect
const zoomInAnimation = `
  @keyframes zoomIn {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

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
    window.location.href = "https://www.instagram.com/yourusername"; // Replace with your actual Instagram handle
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        isDarkMode
          ? "bg-gradient-to-br from-[#111111] to-[#D50032] text-white"
          : "bg-gradient-to-br from-[#00FF00] to-[#FFFFFF] text-black"
      } relative`}
    >
      {/* Include the zoom animation style */}
      <style>{zoomInAnimation}</style>

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
          alt="Your Name"
          className="object-cover w-full h-full rounded-full border-4 border-[#00FF00]"
        />
      </div>

      {/* Name and Registration Number */}
      <div
        className={`text-xl mb-4 text-center ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        <p>Name: <strong>Your Name</strong></p>
        <p>Registration Number: <strong>1234567890</strong></p>
      </div>

      {/* Instagram Button */}
      <button
        onClick={redirectToInstagram}
        className={`${
          isDarkMode ? "bg-[#00FF00] hover:bg-[#00CC00]" : "bg-[#FF0000] hover:bg-[#CC0000]"
        } text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105`}
      >
        Follow me on Instagram
      </button>

      {/* Squid Game Shapes with Animation on Hover */}
      <div className="absolute top-10 left-10">
        <div
          className="w-24 h-24 bg-transparent border-4 border-white rounded-full animation-hover"
        ></div>
      </div>
      <div className="absolute bottom-10 right-10">
        <div
          className="w-32 h-32 bg-transparent border-4 border-white border-solid animation-hover"
        ></div>
      </div>
      <div className="absolute bottom-20 left-10">
        <div
          className="w-24 h-24 bg-transparent border-4 border-white animation-hover"
        ></div>
      </div>

      {/* Toggle Button for Theme */}
      <button
        onClick={toggleTheme}
        className="absolute top-5 right-5 p-3 bg-[#FF0000] text-white rounded-full hover:bg-[#CC0000]"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default SecondPage;
