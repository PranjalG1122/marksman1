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
<<<<<<< HEAD
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
=======
      <div className="flex flex-col gap-2 w-1/2">
      <div className="flex flex-row gap-2">
        <Image src="/home2.png" alt="Image 3" width={500} height={500} className="w-1/2 rounded-lg border border-indigo-300 shadow-lg" />
        <Image src="/home1.png" alt="Image 1" width={500} height={500} className="w-1/2 rounded-lg border border-indigo-300 shadow-lg" />
      </div>
      <div className="flex flex-row gap-2">
        <Image src="/home4.png" alt="Image 4" width={500} height={500} className="w-1/2 rounded-lg border border-indigo-300 shadow-lg" />
        <Image src="/home3.png" alt="Image 3" width={500} height={500} className="w-1/2 rounded-lg border border-indigo-300 shadow-lg" />
      </div>
>>>>>>> 55b6aa9 (feat: homepage)
      </div>
    </main>
  );
};

export default Main;
