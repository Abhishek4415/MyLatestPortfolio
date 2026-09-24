import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiCodersrank } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 md:px-[7vw] border-t border-gray-800/50 bg-gradient-to-t from-gray-900/50 to-transparent">
      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Name */}
          <div className="flex items-center gap-3">
            <SiCodersrank className="text-amber-500 text-3xl" />
            <span className="text-white italic font-bold text-xl">Abhishek</span>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-center md:text-left">
            <p className="text-sm">
              © {currentYear} Abhishek. All rights reserved.
            </p>
            <p className="text-xs mt-1 text-gray-500">
              Built with <span className="text-red-500">❤️</span> using React & Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Abhishek4415"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-full flex items-center justify-center text-lg text-gray-400 hover:text-amber-500 hover:border-amber-500/50 hover:scale-110 hover:bg-gray-800 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-kumar441/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-full flex items-center justify-center text-lg text-gray-400 hover:text-amber-500 hover:border-amber-500/50 hover:scale-110 hover:bg-gray-800 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/abhishek_441/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-full flex items-center justify-center text-lg text-gray-400 hover:text-amber-500 hover:border-amber-500/50 hover:scale-110 hover:bg-gray-800 transition-all duration-300"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-8 pt-8 border-t border-gray-800/30">
          <p className="text-center text-gray-500 text-xs">
            "Code is like humor. When you have to explain it, it's bad." - Cory House
          </p>
        </div>
      </div>
    </footer>
  );
}
