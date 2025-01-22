import React from "react";

function SecondPage() {
  const redirectToInstagram = () => {
    window.location.href = "https://www.instagram.com/yourusername"; // Replace with your actual Instagram handle
  };

  return (
    <div className="bg-gradient-to-br from-[#111111] to-[#D50032] min-h-screen flex flex-col items-center justify-center text-white relative">
      {/* Squid Game Style Header */}
      <div className="text-5xl font-bold mb-6 text-center text-white">
        Squid Game - Profile
      </div>
      
      {/* Squid Game Doll as Profile Picture Holder */}
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#00FF00] mb-6 relative">
        {/* Doll Image as the background */}
        <div className="absolute inset-0 bg-cover bg-center rounded-full"
          style={{
            backgroundImage: `url('https://path_to_squid_game_doll_image.jpg')`, // Replace with actual Squid Game doll image URL
          }}
        ></div>
        {/* Profile Picture will be placed on top of the doll image */}
        <img
          src="/your-picture.jpg" // Replace with your actual profile image path
          alt="Your Name"
          className="object-cover w-full h-full rounded-full border-4 border-[#00FF00] absolute top-0 left-0"
        />
      </div>

      {/* Name and Registration Number */}
      <div className="text-xl mb-4 text-center">
        <p>Name: <strong>Your Name</strong></p>
        <p>Registration Number: <strong>1234567890</strong></p>
      </div>

      {/* Instagram Button */}
      <button
        onClick={redirectToInstagram}
        className="bg-[#00FF00] hover:bg-[#00CC00] text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
      >
        Follow me on Instagram
      </button>

      {/* Squid Game Shapes */}
      <div className="absolute top-10 left-10">
        <div className="w-24 h-24 bg-transparent border-4 border-white rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-10 right-10">
        <div className="w-32 h-32 bg-transparent border-4 border-white border-solid"></div>
      </div>
      <div className="absolute bottom-20 left-10">
        <div className="w-24 h-24 bg-transparent border-4 border-white"></div>
      </div>
    </div>
  );
}

export default SecondPage;
