"use client";

import React from 'react';

const Main: React.FC = () => {
  return (
    <main className="flex justify-between items-center p-12 bg-gray-50">
      <div className="max-w-md">
        <h2 className="text-2xl text-purple-600 mb-4">The best AI adaptive online course</h2>
        <h1 className="text-4xl font-bold mb-4">
          Find the best <span className="text-purple-600">courses</span> here
        </h1>
        <p className="text-lg mb-4">Get a personalized learning experience that adapts to your needs. Get started with CoLearn today!</p>
        <div className="flex space-x-4">
          <button className="bg-purple-600 text-white rounded px-4 py-2 text-lg hover:bg-purple-500">Get Started</button>
          <button className="bg-white text-purple-600 border border-purple-600 rounded px-4 py-2 text-lg hover:bg-gray-100">Learn More</button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 w-1/2">
        <img src="/image1.jpg" alt="Image 1" className="w-1/2 rounded-lg" />
        <img src="/image2.jpg" alt="Image 2" className="w-1/2 rounded-lg" />
        <img src="/image3.jpg" alt="Image 3" className="w-1/2 rounded-lg" />
        <img src="/image4.jpg" alt="Image 4" className="w-1/2 rounded-lg" />
      </div>
    </main>
  );
};

export default Main;
