"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/Button";

import home1 from "@/public/homePage/home1.jpg";
import home2 from "@/public/homePage/home2.jpeg";
import home3 from "@/public/homePage/home3.png";
import home4 from "@/public/homePage/home4.jpg";

const Main: React.FC = () => {
  const images = [home1, home2, home3, home4];

  return (
    <main className="flex flex-col-reverse md:flex-row justify-between items-center w-full min-h-container bg-white p-4 md:p-16 gap-8 md:gap-32">
      <div className="flex flex-col items-start gap-4 w-full">
        <h2 className="text-2xl text-indigo-600 font-semibold text-balance">
          The best AI adaptive online course
        </h2>
        <h1 className="text-4xl lg:text-7xl font-bold">
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
      <div className="w-full flex items-center justify-center ">
        <div className="flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="flex justify-start items-end gap-2.5">
            <div className="w-[300px] h-auto lg:w-[300px] lg:h-[300px]">
              <Image
                className="rounded-[20px] object-cover"
                src={home1}
                alt="home1"
                layout="responsive"
              />
            </div>
            <div className="w-[250px] h-auto lg:w-[250px] lg:h-[250px]">
              <Image
                className="rounded-[20px] object-cover"
                src={home2}
                alt="home2"
                layout="responsive"
              />
            </div>
          </div>
          <div className="flex justify-end items-start gap-2.5">
            <div className="w-[250px] h-auto md:w-[250px] lg:h-[250px]">
              <Image
                className="rounded-[20px] object-cover"
                src={home3}
                alt="home3"
                layout="responsive"
              />
            </div>
            <div className="w-[300px] h-auto lg:w-[300px] lg:h-[300px]">
              <Image
                className="rounded-[20px] object-cover"
                src={home4}
                alt="home4"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
