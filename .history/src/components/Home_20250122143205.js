import React, { useState } from "react";

function Home() {
  const [clickedIndices, setClickedIndices] = useState([]); // Track clicked squares

  const handleGridClick = (e, index) => {
    const gridItem = e.target;
    gridItem.style.backgroundColor = "red";

    // Add animation for the click
    gridItem.classList.add("animate-scale");
    setTimeout(() => gridItem.classList.remove("animate-scale"), 300);

    // Add the index to the clicked indices
    setClickedIndices((prevIndices) => [...prevIndices, index]);

    // If the last square (bottom-right) is clicked (index 8 in a 0-based grid)
    if (index === 8) {
      let delay = 0;
      // Go through all previously clicked items
      clickedIndices.forEach((itemIndex) => {
        setTimeout(() => {
          const item = document.querySelectorAll(".grid-cols-3 > div")[itemIndex];
          item.style.backgroundColor = "blue";
          item.classList.add("animate-scale");
          setTimeout(() => item.classList.remove("animate-scale"), 300);
        }, delay);
        delay += 200; // Add delay between color changes
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-4 lg:p-8 gap-6">
      {/* Left Section */}
      <div className="w-full lg:w-1/3 h-[365px] bg-gradient-to-br from-[#3300FF] to-[#FA00FF] shadow-lg rounded-[15px]"></div>

      {/* Center Section */}
      <div className="w-full lg:w-1/3 h-[365px] bg-white rounded-[15px] shadow-lg flex justify-center items-center relative">
        {/* Logo Image */}
        <img
          src="/logo.png" // Image from the public folder
          alt="E-cell logo"
          className="object-contain w-3/4 h-3/4 rounded-[15px]"
        />
      </div>

      {/* Right Section (Grid) */}
      <div className="w-full lg:w-1/3 h-[365px] bg-white rounded-[15px] shadow-inner grid grid-cols-3 gap-2 p-4">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="bg-[#00407A] w-full h-full cursor-pointer transition-transform duration-300 hover:scale-105 rounded-[15px]"
            onClick={(e) => handleGridClick(e, index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Home;
