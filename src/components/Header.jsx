import arrow from "../assets/images/arrow_outward.svg"
const Header = () => (
  <header 
    className="w-[85%] mx-auto mb-4 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
  >
    <div className="flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="./src/assets/images/logo.png"
          alt="ABM Logo"
          className="h-10 w-auto ml-2"
        />
      </div>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-8 text-white font-normal font-dm">
          <a
            href="#about"
            className="hover:text-green-300 transition-colors duration-200 text-[18px]"
          >
            About Us
          </a>
          <a
            href="#services"
            className="hover:text-green-300 transition-colors duration-200 text-[18px]"
          >
            Services
          </a>
          <a
            href="#spark"
            className="hover:text-green-300 transition-colors duration-200 text-[18px]"
          >
            The Spark
          </a>
        </nav>

        {/* Contact Button */}
        <div className="flex items-center">
          <a
            href="#contact"
            className="flex items-center justify-between bg-[#68EF78] hover:bg-[#68EF78] text-[#1D1B1D] text-[16px] font-semibold px-2 w-[163px] h-[52px] rounded-full font-nunito"
          >
            <span className="text-[16px] pl-4">Contact Us</span>
            <div className="flex items-center justify-center bg-white rounded-full w-[40px] h-[40px]">
              <img src={arrow}/>
            </div>
          </a>
        </div>
    </div>
  </header>
);

export default Header;
