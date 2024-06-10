"use client";

import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-white border-b border-gray-200">
      <div className="flex items-center text-2xl text-gray-800">
        <a href="" className="mr-2"><img src="/logo.png" alt="Logo Colearn" width={250} height={250} /></a>
      </div>
      <div>
        <a href="#about" className="mx-4 text-lg text-gray-800 hover:text-gray-600">About Us</a>
        <a href="#courses" className="mx-4 text-lg text-gray-800 hover:text-gray-600">Courses</a>
        <a href="#contact" className="mx-4 text-lg text-gray-800 hover:text-gray-600">Contact Us</a>
      </div>
      <button className="bg-indigo-600 text-white rounded px-4 py-2 text-lg hover:bg-purple-500">Sign Up</button>  
    </nav>
  );
};

export default Navbar;
