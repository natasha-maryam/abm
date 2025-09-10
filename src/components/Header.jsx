import { useState, useRef, useEffect } from "react";
import arrow from "../assets/images/arrow_outward.svg";
import logo from "../assets/images/logo.png";

const Header = ({ onContactClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const dropdownRef = useRef(null);

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    // First close the dropdown immediately
    setServicesDropdownOpen(false);
    setMenuOpen(false);
    setMobileServicesExpanded(false);
    
    // Then scroll to the section
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 50);
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };

    if (servicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [servicesDropdownOpen]);

  return (
    <>
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

          {/* Desktop Navigation links - centered on desktop */}
          <div className="hidden md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:items-center md:justify-center md:gap-8 text-white font-normal font-dm">
            <button
              className="hover:text-green-300 px-2 py-1 text-center cursor-pointer"
              onClick={() => scrollToSection('about-us')}
            >
              About Us
            </button>
            <div className="relative" ref={dropdownRef}>
              <button
                className="hover:text-green-300 px-2 py-1 text-center focus:outline-none cursor-pointer"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Services
              </button>

              {/* Services Dropdown */}
              {servicesDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-[220px] h-[190px] bg-white/20 backdrop-blur-sm rounded-2xl  border border-white/20 p-y-1 px-2 z-50 overflow-hidden"
                >
                  <div className="space-y-[8px] h-full flex flex-col justify-center">
                    <button
                      className="block bg-[#F3C387] hover:bg-[#F3C387] text-gray-800 px-2 py-2 rounded-[4px] text-sm font-medium transition-colors duration-200 border border-[#111111]/30 text-left w-full"
                      style={{ cursor: 'pointer' }}
                      onClick={() => scrollToSection('growth-matrix')}
                    >
                      Digital Marketing
                    </button>
                    <button
                      className="block bg-[#F3C387] hover:bg-[#F3C387] text-gray-800 px-2 py-1.5 rounded-[4px] text-sm font-medium transition-colors duration-200 border border-[#111111]/30 text-left w-full"
                      style={{ cursor: 'pointer' }}
                      onClick={() => scrollToSection('customer-retention')}
                    >
                      Customer Retention
                    </button>
                    <button
                      className="block bg-[#F3C387] hover:bg-[#F3C387] text-gray-800 px-2 py-1.5 rounded-[4px] text-sm font-medium transition-colors duration-200 border border-[#111111]/30 text-left w-full"
                      style={{ cursor: 'pointer' }}
                      onClick={() => scrollToSection('reputation-management')}
                    >
                      Reputation Management
                    </button>
                    <button
                      className="block bg-[#F3C387] hover:bg-[#F3C387] text-gray-800 px-2 py-1.5 rounded-[4px] text-sm font-medium transition-colors duration-200 border border-[#111111]/30 text-left w-full"
                      style={{ cursor: 'pointer' }}
                      onClick={() => scrollToSection('business-credit')}
                    >
                      Fundraising Growth
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button
              className="hover:text-green-300 px-2 py-1 text-center cursor-pointer"
              onClick={() => scrollToSection('youth-program')}
            >
              The Spark
            </button>
          </div>

          {/* Desktop Contact button */}
          <button
            className="hidden md:flex items-center justify-center bg-[#68EF78] text-[#1D1B1D] px-4 py-2 rounded-full font-nunito"
            onClick={() => {
              onContactClick && onContactClick();
            }}
          >
            <span>Contact Us</span>
            <div className="flex items-center justify-center bg-white rounded-full w-8 h-8 ml-2">
              <img src={arrow} alt="arrow icon" />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`
          fixed inset-0 z-40 transition-opacity duration-300 md:hidden
          ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMenuOpen(false)}
        />
        
        {/* Drawer */}
        <div
          className={`
            fixed top-0 right-0 h-full w-80 bg-white/10 backdrop-blur-md border-l border-white/20
            transform transition-transform duration-300 ease-in-out
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl hover:text-green-300"
            >
              ✖
            </button>
          </div>

          {/* Navigation items */}
          <div className="px-6 py-4 space-y-4">
            {/* About Us */}
            <div className="border-b border-white/20 pb-4">
              <button
                className="text-white text-lg font-medium py-2 hover:text-green-300"
                onClick={() => scrollToSection('about-us')}
              >
                About Us
              </button>
            </div>

            {/* Services Expandable */}
            <div className="border-b border-white/20 pb-4">
              <button
                className="flex items-center justify-between w-full text-white text-lg font-medium py-2"
                onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
              >
                Services
                <span className={`transform transition-transform ${mobileServicesExpanded ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {mobileServicesExpanded && (
                <div className="pl-4 mt-2 space-y-3 animate-fade-in">
                  <button
                    className="block bg-[#F3C387] text-gray-800 px-3 py-2 rounded-lg text-sm font-medium w-full text-left"
                    onClick={() => scrollToSection('growth-matrix')}
                  >
                    Digital Marketing
                  </button>
                  <button
                    className="block bg-[#F3C387] text-gray-800 px-3 py-2 rounded-lg text-sm font-medium w-full text-left"
                    onClick={() => scrollToSection('customer-retention')}
                  >
                    Customer Retention
                  </button>
                  <button
                    className="block bg-[#F3C387] text-gray-800 px-3 py-2 rounded-lg text-sm font-medium w-full text-left"
                    onClick={() => scrollToSection('reputation-management')}
                  >
                    Reputation Management
                  </button>
                  <button
                    className="block bg-[#F3C387] text-gray-800 px-3 py-2 rounded-lg text-sm font-medium w-full text-left"
                    onClick={() => scrollToSection('business-credit')}
                  >
                    Fundraising Growth
                  </button>
                </div>
              )}
            </div>

            {/* The Spark */}
            <div className="border-b border-white/20 pb-4">
              <button
                className="text-white text-lg font-medium py-2 hover:text-green-300"
                onClick={() => scrollToSection('youth-program')}
              >
                The Spark
              </button>
            </div>

            {/* Contact Us Button */}
            <div className="pt-4">
              <button
                className="flex items-center justify-between bg-[#68EF78] text-[#1D1B1D] px-6 py-3 rounded-full font-nunito w-full"
                onClick={() => {
                  onContactClick && onContactClick();
                  setMenuOpen(false);
                }}
              >
                <span>Contact Us</span>
                <div className="flex items-center justify-center bg-white rounded-full w-8 h-8">
                  <img src={arrow} alt="arrow icon" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
