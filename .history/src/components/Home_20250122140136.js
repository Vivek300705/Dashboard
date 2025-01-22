import React from "react";

function Home() {
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

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between p-4 lg:p-8 gap-6">
      {/* Left Section */}
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-full lg:w-1/3 h-64 lg:h-[80vh] rounded-xl shadow-lg"></div>

      {/* Center Section */}
      <div className="flex items-center justify-center w-full lg:w-1/3 h-64 lg:h-[80vh] bg-white rounded-full shadow-lg p-6">
        <img
          src="/logo.png"
          alt="E-cell logo"
          className=" object-fill h-full w-full rounded-full"
        />
      </div>

      {/* Right Section */}
      <div className="bg-white w-full lg:w-1/3 h-64 lg:h-[80vh] rounded-xl shadow-inner grid grid-cols-3 gap-2 p-4">
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

export default Home;
