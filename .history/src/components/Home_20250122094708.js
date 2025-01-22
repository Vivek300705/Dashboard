import React from "react";

function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-4 lg:p-8 h-screen gap-6">
      {/* Left Section */}
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-full lg:w-1/3 h-64 lg:h-full rounded-xl shadow-lg"></div>

      {/* Center Section */}
      <div className="flex items-center justify-center w-full lg:w-1/3 h-64 lg:h-full bg-white rounded-full shadow-lg p-6">
        <img
          src="../../public/logo.png"
          alt="E-cell logo"
          className="w-2/3 h-auto"
        />
      </div>

      {/* Right Section */}
      <div className="bg-white w-full lg:w-1/3 h-64 lg:h-full rounded-xl shadow-inner grid grid-cols-3 gap-2 p-4">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="bg-blue-500 w-full h-full cursor-pointer"
            onClick={(e) => handleGridClick(e, index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

const handleGridClick = (e, index) => {
  const gridItem = e.target;
  gridItem.style.backgroundColor = "red";

  if (index === 8) {
    const gridItems = document.querySelectorAll(".grid-cols-3 > div");
    let delay = 0;
    gridItems.forEach((item) => {
      if (item.style.backgroundColor === "red") {
        setTimeout(() => {
          item.style.backgroundColor = "blue";
        }, delay);
        delay += 200;
      }
    });
  }
};

export default Home;
