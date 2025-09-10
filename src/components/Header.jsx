import { useState } from "react";
import arrow from "../assets/images/arrow_outward.svg";
import logo from "../assets/images/logo.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full  mb-4 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20  md:rounded-full rounded-full">
      <div className="relative flex items-center justify-between flex-wrap md:flex-nowrap">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="ABM Logo"
            className="h-10 w-auto"
          />
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
          <a
            href="#services"
            className="block md:inline-block hover:text-green-300 px-2 py-1 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#spark"  
            className="block md:inline-block hover:text-green-300 px-2 py-1 text-center"
            onClick={() => setMenuOpen(false)}
          >
            The Spark
          </a>
        </div>

        {/* Contact button */}
        <a
          href="#contact"
          className={`
            flex items-center justify-center bg-[#68EF78] text-[#1D1B1D] px-4 py-2 rounded-full font-nunito
            ${menuOpen ? "mt-3 mx-auto w-fit" : "hidden"}
            md:flex md:mt-0 md:mx-0 md:w-fit
          `}
          onClick={() => setMenuOpen(false)}
        >
          <span>Contact Us</span>
          <div className="flex items-center justify-center bg-white rounded-full w-8 h-8 ml-2">
            <img src={arrow} alt="arrow icon" />
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
