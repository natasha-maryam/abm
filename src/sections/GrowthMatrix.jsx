import React from "react";

function GrowthMatrix(props) {
  return (
    <div
      className="min-h-[100vh] bg-no-repeat w-full -mt-40"
      style={{
        backgroundImage: "url('./src/assets/images/matrix-bg.png')",
        backgroundSize: "cover",
      }}
    >
        <div className="pt-[25%] text-center">
            <p className="font-bold text-[52px] font-nunito bg-gradient-to-r from-[#B84F6A] to-[#511B29] bg-clip-text text-transparent drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">The Growth Matrix: Four Forces That</p>
        </div>
    </div>
  );
}

export default GrowthMatrix;
