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
      <div className="absolute w-[385px] h-[385px] left-[119px] top-[104px] bg-gradient-to-br from-[#3300FF] to-[#FA00FF] shadow-lg rounded-[15px]"></div>

      {/* Center Section */}
      <div className="absolute w-[385px] h-[385px] left-[528px] top-[104px]">
        {/* Rectangle 8 (Gray Background) */}
        <div className="absolute w-[385px] h-[385px] left-[528px] top-[104px] bg-[#D9D9D9] border border-[#000000] rounded-[15px]"></div>

        {/* e-cell-mnnit-squarelogo */}
        <div
          className="absolute w-[385px] h-[385px] left-[528px] top-[104px] bg-cover bg-center border border-[#000000] rounded-[15px]"
          style={{
            backgroundImage: `url('https://your-image-url.com/logo.png')`, // Replace with the correct image URL
          }}
        ></div>
      </div>

      {/* Right Section (Grid) */}
      <div className="absolute w-[385px] h-[385px] left-[937px] top-[104px]">
        {/* Rectangle 9 */}
        <div className="absolute w-[385px] h-[385px] left-[937px] top-[104px] bg-[#D9D9D9] shadow-inner rounded-[15px]"></div>

        {/* Grid */}
        <div className="absolute w-[314px] h-[316px] left-[973px] top-[138px] grid grid-cols-3 gap-2 p-4">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="bg-[#00407A] w-full h-full cursor-pointer transition-transform duration-300 hover:scale-105 rounded-[15px]"
              onClick={(e) => handleGridClick(e, index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
