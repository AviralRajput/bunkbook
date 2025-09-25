import React, { useState } from "react";
import logo from '../assets/logos.png';

function Header({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/5 dark:bg-black/90 backdrop-blur-sm py-4 transition-colors duration-500">

      <div className="max-w-8xl mx-auto flex items-center justify-between px-4">
        {/* Logo + Title */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="BunkBook Logo" className="w-12 h-12 rounded-full" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-400">
            BunkBook
          </h1>
        </div>

        {/* Right side: Toggle + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle (always visible) */}
          <button
            onClick={() => setDark(!dark)}
            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg bg-white text-black text-base sm:text-lg md:text-xl font-bold transition-colors shadow-md"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-gray-900 dark:text-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-lg md:text-2xl font-medium text-gray-900 dark:text-gray-100">
          <a href="#features" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Features</a>
          <a href="#screenshots" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Screenshots</a>
          <a href="#faq" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">FAQ</a>
          <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About</a>
        </nav>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white/90 dark:bg-black/90 text-lg font-medium text-gray-900 dark:text-gray-100">
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#screenshots" onClick={() => setMenuOpen(false)}>Screenshots</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </div>
      )}
    </header>
  );
}

export default Header;
