import React from "react";
import LeftImage from "../assets/images/matrix-left.svg";

function GrowthMatrix(props) {
  return (
    <div
      className="w-full -mt-40"
      style={{
        backgroundImage: "url('./src/assets/images/matrix-bg.png')",
        height: "auto", // define your height here
        // backgroundRepeat:'no-repeat'
      }}
    >
      <div className="pt-[21%] flex flex-col items-center">
        <p className="font-bold text-[52px] font-nunito bg-gradient-to-r from-[#B84F6A] to-[#511B29] bg-clip-text text-transparent drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
          The Growth Matrix: Four Forces That
        </p>
        <p className="font-bold text-[52px] font-nunito bg-gradient-to-r from-[#B84F6A] to-[#511B29] bg-clip-text text-transparent drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] -mt-6">
          Define Business Success
        </p>
        <p
          className="text-[16px] font-bold font-nunito max-w-4xl mt-[20px] text-justify mx-auto"
          style={{ lineHeight: "26px", textAlignLast: "center" }}
        >
          In today's competitive marketplace, businesses that thrive don't just
          excel in one area—they master the interconnected elements that create
          sustainable growth. Through our extensive experience with both Fortune
          500 companies and emerging businesses, we've identified four critical
          pillars that determine long-term success
        </p>
      </div>
      <div className="flex justify-between w-[85%] mx-auto mt-[24px] mb-[8%] items-center">
        <div className="w-[40%] mt-10 pl-8">
          <img
            src={LeftImage}
            alt="Digital Marketing"
            className="w-[665px] h-[517px]"
          />
        </div>
        <div className="w-[60%] items-start flex flex-col pt-4">
          <h2 className="font-medium text-[40px] font-clash text-black">
            Digital Marketing: Your
          </h2>
          <h2 className="font-medium text-[40px] font-clash text-black mb-2 -mt-1">
            Gateway To Growth
          </h2>
          <p className="text-[16px] font-nunito text-[#1D1B1D] mb-[7px] leading-relaxed font-bold max-w-2xl">
            Without visibility, even the best businesses remain hidden gems.
            Digital marketing isn't just about being online—it's about being
            found, chosen, and remembered.
          </p>

          <div className="mb-[7px]">
            <h3 className="font-medium text-[18px] font-clash text-black mb-4[7px">
              Why It's Critical
            </h3>
            <ul className="space-y-2 text-[16px] font-nunito text-[#1D1B1D] font-bold">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                87% of consumers begin product searches online
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Digital presence influences 67% of purchase decisions
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Companies with strong digital strategies see 2.8x better revenue
                growth
              </li>
            </ul>
          </div>

          <div>
                 <h3 className="font-medium text-[18px] font-clash text-black mb-[7px]">
              How We Help
            </h3>
               <ul className="space-y-2 text-[16px] font-nunito text-[#1D1B1D] font-bold">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Develop targeted social media campaigns that connect with your
                ideal customers
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Implement SEO strategies that drive organic traffic
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Create automated marketing systems that scale your reach
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Track and optimize your marketing ROI
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default GrowthMatrix;
