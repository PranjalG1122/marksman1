"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/Button";

const Main: React.FC = () => {
  const images = ["/home1.jpg", "/genHome2.jpeg", "/home3.png", "/home2.jpg"];

  return (
    <main className="flex justify-between items-center w-full flex-1 min-h-container ">
      <div className="flex flex-col items-start gap-4 w-full px-16">
        <h2 className="text-2xl text-indigo-600 font-semibold text-balance">
          The best AI adaptive online course
        </h2>
        <h1 className="text-7xl font-bold">
          Find the best <span className="text-indigo-600">courses</span> here
        </h1>
        <p className="text-lg text-indigo-600 font-semibold">
          Get a personalized learning experience that adapts to your needs. Get
          started with CoLearn today!
        </p>
        <div className="flex space-x-4">
          <Button>Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          {images.map((image, i) => {
            return (
              <Image
                key={i}
                src={image}
                alt={`Image ${i + 1}`}
                width={250}
                height={250}
                className="rounded-lg border border-indigo-200"
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
