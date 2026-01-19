import React, { useState } from 'react'
import { SiCodersrank } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiX } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
export default function navbar() {
  const [MenuOpen, setMenuOpen] = useState(false); //control mobile menu 

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false); // Close mobile menu after clicking
    }
  };


  return (
    <div className="relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm"></div>
      <nav className='relative flex z-50 text-xl justify-between items-center md:px-25 px-10 py-7'>
        <div className='flex items-center text-2xl group cursor-pointer'>
          <SiCodersrank className='text-amber-200 group-hover:rotate-12 transition-transform duration-300' />
          <span className='text-[#f7f7f7] italic font-bold group-hover:text-amber-200 transition-colors duration-300'>Abhishek</span >
        </div>

        <ul className='hidden md:flex flex-row gap-5 text-xl'>
          {menuItems.map((item) => (
            <li key={item.id} className='relative group'>
              <button 
                onClick={() => handleScrollToSection(item.id)}
                className='text-gray-400 hover:text-amber-200 transition-all duration-300 relative z-10'
              >
                {item.label.toUpperCase()}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-amber-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
          ))}


        </ul>
        {/* social icons */}
        <div className='hidden   md:flex gap-4 text-3xl'>
          <a href="https://github.com/Abhishek4415" className="cursor-pointer
           text-gray-200 hover:text-amber-200" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/abhishek-kumar441/"
            className='text-gray-200 hover:text-amber-200' target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://leetcode.com/u/abhishek_441/"
            className='text-gray-200 hover:text-amber-200' target="_blank" rel="noopener noreferrer">
            <SiLeetcode />
          </a>


        </div>
        {/* for mobiles */}
        <div className='md:hidden ml-35'>
          {MenuOpen ? (

            <div>
              <FiX onClick={() => setMenuOpen(false)} />

            </div>
          ) :
            <div>

              <TfiMenuAlt onClick={() => setMenuOpen(true)} className='text-3xl cursor-pointer' />
            </div>
          }

        </div>
      </nav>
      {/* mobile menu overlay */}
      {MenuOpen && (
        <div className=" md:hidden  fixed cursor-pointer  top-20 items-center  right-0 w-50 h-full bg-[#b7b8b6]  shadow-lg z-50 flex flex-col p-6 transition-all duration-300 ">

          <ul className='cursor-pointer '>
            {menuItems.map((item) => (
              <li key={item.id}
                className="text-black  cursor-pointer font-bold text-[20px]  transition-transform duration-200 hover:text-amber-200 hover:scale-105 hover:translate-x-2">
                <button  onClick={() => handleScrollToSection(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

          </ul>
          <div className="flex gap-4 text-3xl mt-8">
            <a href="https://github.com/Abhishek4415" className="cursor-pointer text-black hover:text-amber-200" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-kumar441/" className=' text-black hover:text-amber-200' target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/u/abhishek_441/" className=' text-black hover:text-amber-200' target="_blank" rel="noopener noreferrer">
              <SiLeetcode />
            </a>
          </div>


        </div>
      )}
    </div>
  )
}
