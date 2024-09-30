// components/Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black bg-opacity-30 text-white flex justify-between items-center px-8 py-4 z-50">
      <div className="font-bold text-xl">
        <span className="text-[#7AE13F]">FIT</span> <span className="text-white">ZONE</span>
      </div>
      <div className="flex-1 flex justify-center space-x-8">
        <a href="#trainings" className="hover:text-green-500">
          TRAININGS
        </a>
        <a href="#membership" className="hover:text-green-500">
          MEMBERSHIP
        </a>
      </div>
      <div>
        <a href="#contact" className="hover:text-green-500">
          GET IN TOUCH
        </a>
      </div>
    </div>
  );
};

export default Navbar;
