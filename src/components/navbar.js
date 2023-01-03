import React from 'react';
import config from "../config/"

const { navLinks } = config

function Navbar() {
  return (
    <nav className={`${config.style.navBackground} py-2`}>
      <div className="flex items-center justify-between lg:ml-auto lg:mr-auto lg:w-1/2 sm:w-full sm:ml-10 sm:mr-10">
        <a href="#" className="text-black font-bold text-xl">{ config.siteTitle }</a>
        <div className="flex items-center">
          {navLinks.map((navLink, index) => (
            <a key={index} href={navLink.url} className="px-3 py-2 hidden lg:flex rounded-md text-sm font-medium text-black relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">{navLink.name}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;