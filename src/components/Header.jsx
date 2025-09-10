import { useState } from "react";
import arrow from "../assets/images/arrow_outward.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full   mb-4 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20  md:rounded-full">
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="./src/assets/images/logo.png"
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

        {/* Navigation + contact - show/hide on mobile */}
        <nav
          className={`
            w-full md:w-auto
            ${menuOpen ? "block" : "hidden"}
            md:flex md:items-center md:gap-8 text-white font-normal font-dm mt-4 md:mt-0
          `}
        >
          <a
            href="#about"
            className="block md:inline-block hover:text-green-300 px-2 py-1 text-center md:text-left"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#services"
            className="block md:inline-block hover:text-green-300 px-2 py-1 text-center md:text-left"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#spark"
            className="block md:inline-block hover:text-green-300 px-2 py-1 text-center md:text-left"
            onClick={() => setMenuOpen(false)}
          >
            The Spark
          </a>

          <a
            href="#contact"
            className="flex items-center justify-center bg-[#68EF78] text-[#1D1B1D] px-4 py-2 rounded-full font-nunito mt-3 md:mt-0 md:ml-4 mx-auto md:mx-0 w-fit"
            onClick={() => setMenuOpen(false)}
          >
            <span>Contact Us</span>
            <div className="flex items-center justify-center bg-white rounded-full w-8 h-8 ml-2">
              <img src={arrow} alt="arrow icon" />
            </div>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
