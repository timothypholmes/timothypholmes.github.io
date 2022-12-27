import React from 'react';

function Navbar() {
  return (
    <nav className="bg-[#F2F2F2] py-2 px-4">
      <div className="flex items-center justify-between ml-auto mr-auto w-1/2">
        <a href="#" className="text-black font-bold text-xl">Timothy Holmes</a>
        <div className="flex items-center">
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Home</a>
          <a href="#" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">About</a>
          <a href="#" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;