import React from "react";

function SecondPage() {
  const redirectToInstagram = () => {
    window.location.href = "https://www.instagram.com/vivvek_m/"; // Replace with actual Instagram handle
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#D50032] text-white relative">
      {/* Squid Game Style Header */}
      <div className="text-5xl font-bold mb-8 text-center">
        Squid Game - Profile
      </div>

      {/* Profile Picture Holder */}
      <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-[#00FF00] mb-6">
        <img
          src="/profile.jpeg" // Replace with your actual profile image path
          alt="Profile"
          className="object-cover w-full h-full rounded-full"
        />
      </div>

      {/* Name and Registration Number */}
      <div className="text-xl mb-6 text-center">
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
        className="bg-[#FF0000] hover:bg-[#CC0000] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
        aria-label="Follow me on Instagram"
      >
        Follow me on Instagram
      </button>

      {/* Squid Game Shapes */}
      <div className="absolute top-10 left-10 hidden sm:block">
        <div className="w-32 h-32 bg-transparent border-4 border-white rounded-full animate-pulse transition-transform duration-300 transform hover:scale-110"></div>
      </div>
      <div className="absolute bottom-10 right-10 hidden sm:block">
        <div className="w-40 h-40 bg-transparent border-4 border-white border-solid transition-transform duration-300 transform hover:scale-110"></div>
      </div>
      <div className="absolute bottom-20 left-10 hidden sm:block">
        <div className="w-32 h-32 bg-transparent border-4 border-white transition-transform duration-300 transform hover:scale-110"></div>
      </div>
    </div>
  );
}

export default SecondPage;
