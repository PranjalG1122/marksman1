"use client";

import React from "react";
import Image from "next/image";

const Main: React.FC = () => {
  const images = ["/home1.jpg", "/home2.jpg", "/home3.png", "/home4.png"];

  return (
    <main className="flex justify-between items-center p-12 bg-gray-50">
      <div className="max-w-md">
        <h2 className="text-2xl text-indigo-600 mb-4">
          The best AI adaptive online course
        </h2>
        <h1 className="text-4xl font-bold mb-4">
          Find the best <span className="text-purple-600">courses</span> here
        </h1>
        <p className="text-lg mb-4">
          Get a personalized learning experience that adapts to your needs. Get
          started with CoLearn today!
        </p>
        <div className="flex space-x-4">
          <button className="bg-indigo-600 text-white rounded px-4 py-2 text-lg hover:bg-purple-500">
            Get Started
          </button>
          <button className="bg-white text-indigo-600 border border-purple-600 rounded px-4 py-2 text-lg hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-0">
        {images.map((image, i) => {
          return (
            <Image
              key={i}
              src={image}
              alt={`Image ${i + 1}`}
              width={300}
              height={300}
              className="rounded-lg border border-gray-200"
            />
          );
        })}
      </div>
    </main>
  );
};

export default Main;
