import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer
      className="bg-gray-100 dark:bg-black transition-colors duration-500 text-gray-500 dark:text-gray-300 px-8 py-10"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white">
              BunkBook
            </h2>
            <p className="mt-2 text-sm">Manage your attendance smartly.</p>
          </div>
          {/* 1. Reduced space between nav links from gap-8 to gap-6 */}
          <nav className="flex items-center gap-6 text-lg font-medium">
            <a href="#features" className="hover:text-blue-500 dark:hover:text-blue-400">Features</a>
            <a href="#faq" className="hover:text-blue-500 dark:hover:text-blue-400">FAQ</a>
            <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400">About</a>
          </nav>
          {/* 2. Reduced space between icons from space-x-6 to space-x-4 */}
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400"><FaTwitter size={28} /></a>
            <a href="https://www.instagram.com/dark10.aviral/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 dark:hover:text-pink-400"><FaInstagram size={28} /></a>
            <a href="https://www.instagram.com/someshxd/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 dark:hover:text-pink-400"><FaInstagram size={28} /></a>
            <a href="https://www.linkedin.com/in/aviral-rajput-077a37309" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 dark:hover:text-blue-500"><FaLinkedin size={28} /></a>
          </div>
        </div>
        <div className="text-center text-4xs mt-8 border-t border-gray-200 dark:border-gray-800 pt-6">
          © 2025 BunkBook. All rights reserved. Made by Aviral and Somesh.
        </div>
      </div>
    </footer>
  );
}

export default Footer;