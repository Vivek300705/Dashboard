import React from "react";

function Home() {
  const handleGridClick = (e, index) => {
    const gridItem = e.target;
    gridItem.style.backgroundColor = "red";

    // Add animation for the click
    gridItem.classList.add("animate-scale");
    setTimeout(() => gridItem.classList.remove("animate-scale"), 300);

    if (index === 8) {
      const gridItems = document.querySelectorAll(".grid-cols-3 > div");
      let delay = 0;
      gridItems.forEach((item) => {
        if (item.style.backgroundColor === "red") {
          setTimeout(() => {
            item.style.backgroundColor = "blue";
            item.classList.add("animate-scale");
            setTimeout(() => item.classList.remove("animate-scale"), 300);
          }, delay);
          delay += 200;
        }
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-4 lg:p-8 gap-6">
      {/* Left Section */}
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-full lg:w-1/3 h-[365px] rounded-xl shadow-lg"></div>

      {/* Center Section */}
      <div className="flex items-center justify-center w-full lg:w-1/3 h-[365px] bg-white rounded-full shadow-lg p-6">
        <img
          src="/logo.png"
          alt="E-cell logo"
          className="object-contain h-full w-full rounded-full"
        />
      </div>

      {/* Right Section */}
      <div className="bg-white w-full lg:w-1/3 h-[365px] rounded-xl shadow-inner grid grid-cols-3 gap-2 p-4">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="bg-blue-500 w-full h-full cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={(e) => handleGridClick(e, index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Home;
