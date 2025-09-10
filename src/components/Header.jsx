import { useState } from "react";
import arrow from "../assets/images/arrow_outward.svg";
import logo from "../assets/images/logo.png";

const Header = ({ onContactClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <header className="w-full  mb-4 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20  md:rounded-full rounded-full">
      <div className="relative flex items-center justify-between flex-wrap md:flex-nowrap">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="ABM Logo" className="h-10 w-auto" />
        </div>

        {/* Hamburger button on mobile */}
        <button
          className="md:hidden text-white text-3xl ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation links - centered on desktop */}
        <div
          className={`
            w-full md:w-auto md:absolute md:left-1/2 md:transform md:-translate-x-1/2
            ${menuOpen ? "block" : "hidden"}
            md:flex md:items-center md:justify-center md:gap-8 text-white font-normal font-dm mt-4 md:mt-0
          `}
        >
          <a
            href="#about"
            className="block md:inline-block hover:text-green-300 px-2 py-1 text-center"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </a>
          <div className="relative">
            <button
              className="block md:inline-block hover:text-green-300 px-2 py-1 text-center focus:outline-none"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            >
              Services
            </button>

            {/* Services Dropdown */}
            {servicesDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-[220px] h-[190px] bg-white/20 backdrop-blur-sm rounded-2xl  border border-white/20 p-y-1 px-2 z-50 overflow-hidden"
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <div className="space-y-[8px] h-full flex flex-col justify-center">
                  <a
                    href="#digital-marketing"
                    className="block bg-[#F3C387] hover:bg-[#F3C387] text-gray-800 px-2 py-2 rounded-[4px] text-sm font-medium transition-colors duration-200 border border-[#111111]/30"
                    onClick={() => {
                      setServicesDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Digital Marketing
                  </a>
                  <a
                    href="#customer-retention"
                    className="block bg-[#F3C387] hover:bg-[#F3C387] text-gray-800 px-2 py-1.5 rounded-[4px] text-sm font-medium transition-colors duration-200 border border-[#111111]/30"
                    onClick={() => {
                      setServicesDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Customer Retention
                  </a>
                  <a
                    href="#reputation-management"
                    className="block bg-[#F3C387] hover:bg-[#F3C387] text-gray-800 px-2 py-1.5 rounded-[4px] text-sm font-medium transition-colors duration-200 border border-[#111111]/30"
                    onClick={() => {
                      setServicesDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Reputation Management
                  </a>
                  <a
                    href="#fundraising-growth"
                    className="block bg-[#F3C387] hover:bg-[#F3C387] text-gray-800 px-2 py-1.5 rounded-[4px] text-sm font-medium transition-colors duration-200 border border-[#111111]/30"
                    onClick={() => {
                      setServicesDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Fundraising Growth
                  </a>
                </div>
              </div>
            )}
          </div>
          <a
            href="#spark"
            className="block md:inline-block hover:text-green-300 px-2 py-1 text-center"
            onClick={() => setMenuOpen(false)}
          >
            The Spark
          </a>
        </div>

        {/* Contact button */}
        <button
          className={`
            flex items-center justify-center bg-[#68EF78] text-[#1D1B1D] px-4 py-2 rounded-full font-nunito
            ${menuOpen ? "mt-3 mx-auto w-fit" : "hidden"}
            md:flex md:mt-0 md:mx-0 md:w-fit
          `}
          onClick={() => {
            onContactClick && onContactClick();
            setMenuOpen(false);
          }}
        >
          <span>Contact Us</span>
          <div className="flex items-center justify-center bg-white rounded-full w-8 h-8 ml-2">
            <img src={arrow} alt="arrow icon" />
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
