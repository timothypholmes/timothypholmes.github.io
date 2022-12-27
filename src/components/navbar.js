import React from 'react';
import config from "../config/"

const { navLinks } = config

function Navbar() {
  return (
    <nav className={`${config.style.navBackground} py-2 px-4`}>
      <div className="flex items-center justify-between ml-auto mr-auto w-1/2">
        <a href="#" className="text-black font-bold text-xl">{ config.siteTitle }</a>
        <div className="flex items-center">
          {navLinks.map((navLink, index) => (
            <a key={index} href={navLink.url} className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-gray-300 focus:outline-none focus:text-gray-300">{navLink.name}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;