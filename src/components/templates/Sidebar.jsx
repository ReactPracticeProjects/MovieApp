import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFire } from "react-icons/fa";
import { RiMagicLine, RiMovie2Line } from "react-icons/ri";
import { BiShow } from "react-icons/bi";
import { MdSportsHandball } from "react-icons/md";




function Sidebar() {
      
         

  return (
    <div className='w-full md:w-[20%] h-full border-r border-zinc-800 bg-[#121212] px-6 py-5 text-white'>
      
      {/* Logo Section */}
      <div className='flex items-center text-2xl font-bold mb-6'>
        <img src="./video-player.png" className='w-[30px] mr-3' alt="Movie App Logo" />
        <span className="text-white">Movie App</span>
      </div>

      {/* Navigation Menu */}
      <nav>
        <h2 className='text-lg font-semibold text-gray-300 mb-3'>New Feeds</h2>
        <div className='flex flex-col'>
          <NavLink 
            to="/trending" 
            className={({ isActive }) => 
              `flex items-center gap-3 text-base py-3 px-4 rounded-md hover:bg-purple-700 hover:text-white transition duration-200 
              ${isActive ? "bg-purple-700 text-white" : ""}`
            }
          >
            <FaFire /> Trending
          </NavLink>
          <NavLink 
            to="/popular" 
            className={({ isActive }) => 
              `flex items-center gap-3 text-base py-3 px-4 rounded-md hover:bg-purple-700 hover:text-white transition duration-200 
              ${isActive ? "bg-purple-700 text-white" : ""}`
            }
          >
            <RiMagicLine /> Popular
          </NavLink>
          <NavLink 
            to="/movies" 
            className={({ isActive }) => 
              `flex items-center gap-3 text-base py-3 px-4 rounded-md hover:bg-purple-700 hover:text-white transition duration-200 
              ${isActive ? "bg-purple-700 text-white" : ""}`
            }
          >
            <RiMovie2Line /> Movies
          </NavLink>
          <NavLink 
            to="/tv-shows" 
            className={({ isActive }) => 
              `flex items-center gap-3 text-base py-3 px-4 rounded-md hover:bg-purple-700 hover:text-white transition duration-200 
              ${isActive ? "bg-purple-700 text-white" : ""}`
            }
          >
            <BiShow /> TV Shows
          </NavLink>
          <NavLink 
            to="/sports" 
            className={({ isActive }) => 
              `flex items-center gap-3 text-base py-3 px-4 rounded-md hover:bg-purple-700 hover:text-white transition duration-200 
              ${isActive ? "bg-purple-700 text-white" : ""}`
            }
          >
            <MdSportsHandball /> Sports
          </NavLink>
        </div>
      </nav>

      {/* Divider */}
      <hr className='border-gray-700 my-5' />

      {/* Website Information */}
      <div>
        <h2 className='text-lg font-semibold text-gray-300 mb-3'>Website Information</h2>
        <div className='flex flex-col'>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `flex items-center gap-3 text-base py-3 px-4 rounded-md hover:bg-purple-700 hover:text-white transition duration-200 
              ${isActive ? "bg-purple-700 text-white" : ""}`
            }
          >
            <FaFire /> About Us
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `flex items-center gap-3 text-base py-3 px-4 rounded-md hover:bg-purple-700 hover:text-white transition duration-200 
              ${isActive ? "bg-purple-700 text-white" : ""}`
            }
          >
            <RiMagicLine /> Contact Us
          </NavLink>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;
