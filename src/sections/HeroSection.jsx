import Header from "../components/Header";
import arrow from "../assets/images/arrow_outward.svg";
import image1 from "../assets/images/hero-image-1.png";
import image2 from "../assets/images/hero-image-2.png";
import image3 from "../assets/images/hero-image-3.png";
import dots from "../assets/images/white-dots.svg";

const HeroSection = () => (
  <div
    className="min-h-[100vh] bg-no-repeat bg-center w-full pt-8"
    style={{
      backgroundImage: "url('./src/assets/images/hero-section.png')",
      backgroundSize: "100% auto",
    }}
  >
    <Header />
    <section className="w-[85%] mx-auto min-h-[80vh] py-14">
      {/* Three Headings in Column */}
      <div className="space-y-4 mb-8 max-w-3xl">
        <div className="h-16 text-[52px] font-clash font-medium text-black">
          Comprehensive
        </div>
        <div className="h-16 text-[52px] font-clash font-medium text-black">
          Business Growth
        </div>
        <div className="h-16 text-[52px] font-clash font-medium text-black">
          Strategies & Solutions
        </div>
      </div>

      {/* Content and Images Area */}
      <div className="flex items-start gap-68">
        {/* Left Content Area */}
        <div >
          {/* Paragraph */}
          <div
            className="text-[18px] font-nunito rounded mb-8 font-medium"
            style={{ lineHeight: "34px" }}
          >
            We create guaranteed business success & growth by implementing four
            forces that define business success. It is important to know why
            these four areas and why they define your success
          </div>

          {/* Button */}

          <a
            href="#contact"
            className="flex items-center justify-between bg-[#68EF78] hover:bg-[#68EF78] text-[#1D1B1D] text-[16px] font-semibold px-2 w-[163px] h-[52px] rounded-full font-nunito"
          >
            <span className="text-[16px] pl-4">Get Started</span>
            <div className="flex items-center justify-center bg-white rounded-full w-[40px] h-[40px]">
              <img src={arrow} />
            </div>
          </a>
        </div>

        {/* Right Images Area */}
        <div className="flex items-end space-x-6 relative">
          {/* Small Image */}
          <div className="w-[208px] h-[200px]  rounded-[16.54px]">
            <img src={image1} alt="Image" />
          </div>

          {/* Medium Image */}
          <div className="w-[272px] h-[249px]  rounded-[16.54px]">
            <img src={image2} alt="Image" />
          </div>

          {/* Large Image */}
          <div className="w-[363px] h-[338px] rounded-[16.54px] relative">
            {/* White dots placeholder at top right - behind the main image */}
            <div className="absolute -top-6 -right-4 w-[103px] h-[84px] rounded z-0">
              <img src={dots} alt="Image" />
            </div>
            <img src={image3} alt="Image" className="relative z-10" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HeroSection;
