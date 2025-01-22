import React from "react";

function SecondPage() {
  const redirectToInstagram = () => {
    window.location.href = "https://www.instagram.com/vivvek_m/"; // Replace with actual Instagram handle
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#00FF00] to-[#FFFFFF] text-black relative">
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

      {/* Umbrella Icon in Rectangle */}
      <div className="absolute top-10 left-10 hidden sm:block">
        <div className="w-32 h-20 flex items-center justify-center bg-[#FF0000] text-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-12 h-12"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12h10V2zm0 20c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm8-10c0-5.52-4.48-10-10-10v10h10z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
